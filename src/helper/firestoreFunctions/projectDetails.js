import db from "../firestore";

export const getProjectDetails = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("projectdetails")
			.onSnapshot((snapshot) => {
				let projectdetailsData = {};
				// eslint-disable-next-line array-callback-return
				const val = snapshot.docs[0];
				projectdetailsData = {
					id: val.id,
					...val.data(),
				};

				resolve(projectdetailsData);
			});
	});
};
export const addProjectDetails = (projectDetails) => {
	console.log("projectDetails", projectDetails);
	return new Promise((resolve, reject) => {
		//  Get add category in firestore
		let insertData = { projectDetails };
		console.log("insertData", insertData);
		db()
			.collection("projectdetails")
			.add(insertData)
			.then(async (docRef) => {
				console.log("docRef", docRef);
				insertData = { id: docRef.id, ...insertData.projectDetails };
				resolve(insertData);
				console.log("insertData", insertData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};
export const editProjectDetails = (projectDetails) => {
	console.log("projectDetails", projectDetails);
	return new Promise(async (resolve, reject) => {
		//  Get edit category in firestore
		let updateData = {
			projectDetails: [projectDetails],
		};
		// let updateData = projectSetting;

		const dbRef = db().collection("projectdetails").doc(projectDetails.id);

		dbRef
			.update(updateData)
			.then(async (docRef) => {
				updateData = { ...projectDetails, ...updateData };
				resolve(updateData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};
