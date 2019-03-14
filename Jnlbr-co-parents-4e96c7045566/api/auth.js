import { auth, firestore } from "react-native-firebase";
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import permissions from "../constants/permissions";

export const loginWithFacebook = async () => {
  try {  
    const logIn = await LoginManager.logInWithReadPermissions(permissions);
    if (logIn.isCancelled) {
      return [null, 'Login cancelleed'];
    }
  
    const tokenData = await AccessToken.getCurrentAccessToken();
    const credentials = auth.FacebookAuthProvider.credential(tokenData.accessToken);
    const userCredentials = await auth().signInWithCredential(credentials);
    const user = userCredentials.user.toJSON();
    const userRef = firestore().collection('user');

    if(user) {
      const { uid } = user;
      const data = {
        email: user.email,
        icon: user.photoURL,
        phoneNumber: user.phoneNumber,
        name: user.displayName,
        lastSignInTime: user.metadata.lastSignInTime
      }
      
      await userRef.doc(uid).set(data);
      return [{
        user: {
          id: uid,
        ...data
        },
        token: tokenData.accessToken
      }, null];
    } else {
      return [null, 'User data not retreive'];
    }
  } catch (err) {
    return [null,err.message || 'Was not able to log in with facebook API'];
  }
}

export const signUp = async ({email,password,name,phoneNumber}) => {
  const ref = firestore().collection('user');
  try {
    let { user } = await auth().createUserWithEmailAndPassword(email,password);
    if(user) {
      user = user._auth._user._user;
      const _user = {
        email: user.email,
        icon: null,
        phoneNumber: phoneNumber,
        name: name,
        lastSignInTime: null
      }
      await ref.doc(user.uid).set(_user);
      return {
        id:user.uid,
        ..._user
      }
    } else {
      return null;
    }
  } catch(err) {
    throw { 
      message: err.message,
      code: err.code
    };
  }
}

export const loginWithEmailAndPassword = async (email,password) => {
  const ref = firestore().collection('user');
  try {
    let {user} = await auth().signInWithEmailAndPassword(email,password);
    user = user._auth._user;
    if (user)
      return (await ref.doc(user.uid).get()).data();
    else  
      return null;
  } catch(err) {
    throw err;
  }
}

export const fillForm = async (id,children,coparent) => {
  const ref = firestore().collection('user').doc(id);
  const batch = firestore().batch();
  const chilrendRef = ref.collection('child');
  const coparentRef = ref.collection('coparent').doc();
  batch.set(coparentRef,coparent);
  children.forEach(child => {
    const childRef = chilrendRef.doc();
    batch.set(childRef,child);
  });
  try {
    await batch.commit();
  } catch(err) {
    throw err;
  }
  try {
    const fetchChildren = await ref.collection('child').get();
    const fetchCoparents = await ref.collection('coparent').get();
    const _children = [], _coparent = [];
    fetchChildren.forEach(c => {
      _children.push({
        id: c.id,
        ...c.data()
      });
    });
    fetchCoparents.forEach(c => {
      _coparent.push({
        id: c.id,
        ...c.data()
      });
    })
    return {
      children:_children,
      coParents:_coparent
    }
  } catch(err) {
    throw err;
  }
}