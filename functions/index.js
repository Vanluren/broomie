const functions = require('firebase-functions');
const gcStorage = require('@google-cloud/storage')();
const os = require('os');
const path = require('path');

exports.onImageUploadResize = functions.storage.object().onFinalize(object => {
	const bucket = object.bucket;
	const contentType = object.type;
	const filePath = object.name;
	console.log('File change detected:', object);
	if(!path.basename(filePath).startsWith('renamed-')){
		const destBucket = gcStorage.bucket(bucket);
		const tmpFilePath = path.join(os.tmpdir(), filePath);
		const metaData = { contentType };
		return destBucket
			.file(filePath)
			.download({
				destination: tmpFilePath,
			})
			.then(
				() => destBucket.upload(tmpFilePath, {
					destination: 'renamed-' + path.basename(filePath),
					metadata: metaData
				})
			)
	}
	return;
});