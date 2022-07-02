#การรัน json-server on port 9000
	~cd json-server
	~npm install
	~node index.js

	ใช้คำสั่ง node index.js ในการ start แค่ครั้งเดียว ก็จะ Get json data มาได้ทั้งสองไฟล์ คือ ไฟล์ db.json และไฟล์ db-en.json
	-ไฟล์ db.json จะรับบน http://localhost:9000/th/trips
	-ไฟล์ db-en.json จะรับบน http://localhost:9000/en/trips
