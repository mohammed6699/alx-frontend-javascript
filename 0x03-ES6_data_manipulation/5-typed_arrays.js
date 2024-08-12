export default function createInt8TypedArray (length, position, value) {
	if (position >= length) {
		throw new Error ('Position outside range');
	}
	const Buffer = new DataView (new ArrayBuffer(length), 0, length);
	Buffer.setUint8(position, value);
	return Buffer;
}
