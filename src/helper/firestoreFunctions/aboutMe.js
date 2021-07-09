import db from "../firestore";

export const getAboutMe = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("aboutMe")
			.onSnapshot((snapshot) => {
				let aboutMeData = {};
				// eslint-disable-next-line array-callback-return
				const val = snapshot.docs[0];

				aboutMeData = {
					id: val.id,
					...val.data(),
				};

				resolve(aboutMeData);
			});
	});
};
export const editAboutMe = (aboutMe) => {
	return new Promise(async (resolve, reject) => {
		//  Get edit category in firestore
		let updateData = {
			description: aboutMe.description,
			personalInfo: aboutMe.personalInfo,
			professionalSkills: aboutMe.professionalSkills,
			experience: aboutMe.experience,
			education: aboutMe.education,
			services: aboutMe.services,
			testimonials: aboutMe.testimonials,
			certificats: aboutMe.certificats,
		};
		// let updateData = projectSetting;

		const dbRef = db().collection("aboutMe").doc(aboutMe.id);

		dbRef
			.update(updateData)
			.then(async (docRef) => {
				updateData = { ...aboutMe, ...updateData };
				resolve(updateData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};
