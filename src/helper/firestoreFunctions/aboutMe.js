import db from "../firestore";

export const getAboutMe = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("aboutMe")
			.onSnapshot((snapshot) => {
				console.log("snapshot", snapshot);
				let aboutMeData = {};
				// eslint-disable-next-line array-callback-return
				const val = snapshot.docs[0];
				aboutMeData = {
					id: val.id,
					...val.data(),
				};

				console.log("aboutMeData : ", aboutMeData);
				resolve(aboutMeData);
			});
	});
};
