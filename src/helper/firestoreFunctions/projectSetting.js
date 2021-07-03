import db from "../firestore";

export const getProjectSetting = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("projectsetting")
			.onSnapshot((snapshot) => {
				let projectsettingData = [];
				snapshot.docs.map((val) => {
					projectsettingData = [
						...projectsettingData,
						{ id: val.id, ...val.data() },
					];
				});
				console.log("projectsettingData : ", projectsettingData);
				resolve(projectsettingData);
			});
	});
};

export const addProjectSetting = (projectsetting) => {
	console.log("category1", projectsetting);
	return new Promise((resolve, reject) => {
		//  Get add category in firestore
		let insertData = { name: projectsetting };
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

// export const editCategory = (data, category) => {
// 	console.log("category123", category, data);
// 	return new Promise((resolve, reject) => {
// 		//  Get edit category in firestore
// 		let updateData = { name: category };
// 		db()
// 			.collection("category")
// 			.doc(data.id)
// 			.update(updateData)
// 			.then(async (docRef) => {
// 				updateData = { id: data.id, ...updateData };
// 				resolve(updateData);
// 			})

// 			.catch((error) => {
// 				console.error("Error adding document: ", error);
// 				reject(error);
// 			});
// 	});
// };

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
