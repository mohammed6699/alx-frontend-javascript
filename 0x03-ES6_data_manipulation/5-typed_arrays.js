export default function createInt8TypedArray (length, position, value) {
	if (position >= length) {
		return ('Position outside range');
	}
	const Buffer = new DataView (new ArrayBuffer(length), 0, length);
	Buffer.setInt8(position, value);
	return Buffer;
}
