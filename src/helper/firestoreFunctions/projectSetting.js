import db from "../firestore";

export const getProjectSetting = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("projectsetting")
			.onSnapshot((snapshot) => {
				let projectsettingData = {};
				// eslint-disable-next-line array-callback-return
				const val = snapshot.docs[0];
				projectsettingData = {
					id: val.id,
					...val.data(),
				};

				resolve(projectsettingData);
			});
	});
};

export const addProjectSetting = (projectsetting) => {
	return new Promise((resolve, reject) => {
		//  Get add category in firestore
		let insertData = projectsetting;

		db()
			.collection("projectsetting")
			.add(insertData)
			.then(async (docRef) => {
				insertData = { id: docRef.id, ...insertData };
				resolve(insertData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};

export const editProjectSetting = (projectSetting) => {
	return new Promise(async (resolve, reject) => {
		//  Get edit category in firestore
		let updateData = {
			id: projectSetting.id,
			firstName: projectSetting.firstName,
			lastName: projectSetting.lastName,
			profileImage: projectSetting.profileImage,
			profileLabel: projectSetting.profileLabel,
			headingSkills: [...projectSetting.headingSkills],
			socialMediaLinks: [...projectSetting.socialMediaLinks],
		};
		// let updateData = projectSetting;

		const dbRef = db().collection("projectsetting").doc(projectSetting.id);

		dbRef
			.update(updateData)
			.then(async (docRef) => {
				updateData = { ...projectSetting, ...updateData };
				resolve(updateData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};

// export const deleteCategory = (val) => {
// 	return new Promise((resolve, reject) => {
// 		//  Get delete category in firestore
// 		db()
// 			.collection("category")
// 			.doc(val)
// 			.delete()
// 			.then(resolve)
// 			.catch((error) => {
// 				console.error("Error removing document: ", error);
// 				reject(reject);
// 			});
// 	});
// };
