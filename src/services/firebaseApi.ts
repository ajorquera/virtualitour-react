import { DocumentReference, DocumentSnapshot, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { auth, firestore } from "./firebase";
import { User, onAuthStateChanged } from "firebase/auth";

const getOnAuthStateChangedPromise = () => {
    return new Promise<User>((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                reject('No user logged in');
            }
        });
    });
};

const processQuery = async (query: any) => {
    const querySnap = await getDocs(query);

    const data: any = [];

    querySnap.forEach((doc: any) => {
        data.push(processDocSnap(doc));
    });

    return data;
};

const processDocRef = async (docRef: DocumentReference) => {
    const docSnap = await getDoc(docRef);
    return processDocSnap(docSnap);
};

const processDocSnap = (docSnap: DocumentSnapshot) => {
    return { ...docSnap.data(), id: docSnap.id };
};

export const getPlans = async () => {
    const myPlanId = await getMyPlanId();

    const query = (collection(firestore, 'plans'));

    return processQuery(query)
};

export const getMyPlanId = async () => {
    const user: any = await getMyUser();

    return user.planId;

};

export const getMyUser = async () => {
    const authUser = await getOnAuthStateChangedPromise();

    const docRef = (doc(firestore, 'users', authUser.uid));

    return processDocRef(docRef);
};

export const getMyTours = async () => {
    const user = await getMyUser();
    const firestoreQuery = query(collection(firestore, 'tours'), where('ownerId', '==', user.id));

    return processQuery(firestoreQuery);

};

