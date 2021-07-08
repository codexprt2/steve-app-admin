import db from "../firestore";

export const getSkillCategory = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("skillcategory")
			.onSnapshot((snapshot) => {
				console.log("snapshot", snapshot);
				let skillcategoryData = {};
				// eslint-disable-next-line array-callback-return
				const val = snapshot.docs[0];
				skillcategoryData = {
					id: val.id,
					...val.data(),
				};

				console.log("skillcategoryData : ", skillcategoryData);
				resolve(skillcategoryData);
			});
	});
};
export const editSkillCategory = (skillCategory) => {
	console.log("skillCategory", skillCategory);
	return new Promise(async (resolve, reject) => {
		//  Get edit category in firestore
		let updateData = {
			skillCategories: [...skillCategory.skillCategories],
		};
		// let updateData = projectSetting;
		console.log("updateData", updateData);

		const dbRef = db().collection("skillcategory").doc(skillCategory.id);

		dbRef
			.update(updateData)
			.then(async (docRef) => {
				console.log("docRef", docRef);
				updateData = { ...skillCategory, ...updateData };
				resolve(updateData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};
