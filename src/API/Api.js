import { collection, getDoc, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../FirebaseConfig/FirebaseConfig'

export const getTypes = async () => {
    const typeCollection = collection(db, "taskType");
    const querySnapshot = await getDocs(typeCollection);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
    });

    return dataArray;
}

export const getPriority = async () => {
    const priorityCollection = collection(db, "priority")
    const querySnapshot = await getDocs(priorityCollection);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
    });

    return dataArray;
}

export const getAssignee = async () => {
    const priorityCollection = collection(db, "employee")
    const querySnapshot = await getDocs(priorityCollection);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
    });

    return dataArray;
}

export const getStatus = async () => {
    const priorityCollection = collection(db, "status")
    const querySnapshot = await getDocs(priorityCollection);
    const dataArray = [];
    querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
    });

    return dataArray;
}

export const create_tickets = async (values) => {
    const ticketCollection = collection(db, "Tickets")
    const data = await addDoc(ticketCollection, values)
    return data?.id
}

export const getTickets = async () => {
    const ticketCollection = collection(db, "Tickets");
    const querySnapshot = await getDocs(ticketCollection);
    const dataArray = [];

    querySnapshot.forEach((doc) => {
        // Include the document ID along with the document data
        const dataWithId = { id: doc.id, ...doc.data() };
        dataArray.push(dataWithId);
    });

    return dataArray;
};

export const updateTicketStatus = async ({ docId, newData }) => {
    const docRef = doc(db, "Tickets", docId);
    console.log(docId, newData);
    try {
        const res = await updateDoc(docRef, newData);
        console.log("Document successfully updated!");
        return res;
    } catch (e) {
        console.error("Error updating document: ", e);
    }
};

