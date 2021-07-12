import db from "../firestore";

export const getProjectCategory = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("projectcategory")
			.onSnapshot((snapshot) => {
				let projectcategoryyData = {};
				// eslint-disable-next-line array-callback-return
				const val = snapshot.docs[0];
				projectcategoryyData = {
					id: val.id,
					...val.data(),
				};

				resolve(projectcategoryyData);
			});
	});
};
export const editProjectCategory = (projectCategory) => {
	return new Promise(async (resolve, reject) => {
		//  Get edit category in firestore
		let updateData = {
			projectCategories: [...projectCategory.projectCategories],
		};
		// let updateData = projectSetting;

		const dbRef = db().collection("projectcategory").doc(projectCategory.id);

		dbRef
			.update(updateData)
			.then(async (docRef) => {
				updateData = { ...projectCategory, ...updateData };
				resolve(updateData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};
