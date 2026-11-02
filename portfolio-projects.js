const PORTFOLIO_PROJECTS = [
    {
        number: '02',
        title: 'ระบบติดตามการเช็คระยะและการติดต่อลูกค้า',
        englishTitle: 'Vehicle Service Follow-up & Customer Contact Tracker',
        category: 'SERVICE OPERATIONS',
        role: 'วิเคราะห์กระบวนการและพัฒนาระบบเว็บ',
        overview: 'เว็บแอปพลิเคชันสำหรับทีมบริการ ใช้ติดตามลูกค้าในกระบวนการเช็คระยะและการติดต่อหลังการให้บริการ รวมสถานะและประวัติการติดตามไว้ในมุมมองเดียว พร้อมดูภาพรวมแยกตามเขต สาขา และช่วงระยะ',
        responsibilities: [
            'วิเคราะห์กระบวนการทำงานและแปลงความต้องการเป็นระบบที่ใช้ได้จริงในงานบริการ',
            'พัฒนาหน้าเว็บหลักเพื่อแสดงข้อมูลและช่วยให้ทีมติดตามงานได้รวดเร็วขึ้น',
            'จัดการการบันทึกและแสดงสถานะการติดต่อลูกค้าให้เป็นระบบเดียวกัน',
            'ปรับการนำเสนอข้อมูลให้ครบถ้วนและเข้าใจง่ายสำหรับการตัดสินใจ'
        ],
        stack: [
            { name: 'Web Application', items: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'] },
            { name: 'Data & Access', items: ['PDO', 'เชื่อมต่อฐานข้อมูลหลายแหล่ง', 'Login', 'Session Management'] }
        ],
        features: [
            'แสดงภาพรวมงานติดตามแยกตามระดับเขตและสาขา',
            'กรองและค้นหาข้อมูลเพื่อดูสถานะงานที่ต้องติดตาม',
            'บันทึกประวัติการติดต่อและสถานะลูกค้าในมุมมองเดียว',
            'ช่วยให้ผู้ดูแลและทีมงานตรวจสอบความคืบหน้าของงานได้รวดเร็ว'
        ],
        workflow: ['รวบรวมข้อมูลลูกค้า', 'จัดกลุ่มตามเขตและสาขา', 'ตรวจสอบงานตามรอบ', 'บันทึกผลการติดต่อ', 'ติดตามสถานะและประวัติ'],
        outcomes: [
            'เพิ่มความรวดเร็วในการติดตามงานและลดความล่าช้า',
            'รวมสถานะงานให้ทีมเห็นภาพเดียวกัน ลดการพลาดหรือติดตามซ้ำ',
            'สนับสนุนการตัดสินใจด้วยข้อมูลที่ชัดเจนและทันเวลา',
            'ช่วยเพิ่มประสิทธิภาพการบริหารงานในระดับสาขาและเขต'
        ],
        highlight: 'เปลี่ยนข้อมูลการติดตามที่กระจัดกระจายให้เป็นภาพรวมที่ทีมบริการใช้ตรวจสอบงานประจำวันได้สะดวก'
    },
    {
        number: '03',
        title: 'ระบบติดตาม VIN Recall และงานซ่อมต่อเนื่อง',
        englishTitle: 'VIN Recall Tracker / Follow-up Repairs',
        category: 'RECALL OPERATIONS',
        role: 'วิเคราะห์และพัฒนาฟีเจอร์หลักของระบบ',
        overview: 'เว็บแอปพลิเคชันสำหรับติดตามและดำเนินการกรณีรถมีปัญหาหรือถูกเรียกคืนจากโรงงาน รองรับการนำเข้าข้อมูล ตรวจสอบ ค้นหา และติดตามผลการดำเนินงานพร้อมประวัติย้อนหลัง',
        responsibilities: [
            'วิเคราะห์กระบวนการทำงานจากความต้องการจริงของทีม',
            'ออกแบบและพัฒนาฟีเจอร์หลักให้ใช้งานง่ายและต่อเนื่อง',
            'ดูแลกระบวนการนำเข้าข้อมูล การค้นหา และการติดตามผล',
            'ปรับปรุงประสิทธิภาพและลดความล่าช้าในการใช้งาน'
        ],
        stack: [
            { name: 'Web Application', items: ['PHP', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'] },
            { name: 'Data', items: ['ฐานข้อมูลสำหรับสถานะและประวัติ', 'นำเข้าข้อมูลจากไฟล์'] }
        ],
        features: [
            'นำเข้าข้อมูลรถจากไฟล์เพื่อลดการป้อนข้อมูลด้วยตนเอง',
            'ค้นหาข้อมูลรถและติดตามสถานะการดำเนินการ',
            'แสดงข้อมูลสำคัญให้ทีมเห็นภาพรวมของงานที่ต้องทำ',
            'บันทึกและตรวจสอบประวัติการติดตามย้อนหลัง'
        ],
        workflow: ['รับไฟล์ข้อมูลจากโรงงาน', 'นำเข้าระบบ', 'ตรวจสอบและจัดเก็บข้อมูล', 'ค้นหาและติดตามผล', 'ตรวจสอบสถานะและประวัติ'],
        outcomes: [
            'ลดขั้นตอนการทำงานที่เคยต้องทำด้วยมือหลายขั้นตอน',
            'เพิ่มความรวดเร็วในการค้นหาและติดตามข้อมูลสำคัญ',
            'ช่วยให้ทีมตรวจสอบสถานะงานได้ชัดเจนขึ้น',
            'ลดโอกาสคลาดเคลื่อนในการจัดการข้อมูลและตอบสนองต่อปัญหา'
        ],
        highlight: 'เชื่อมการนำเข้าข้อมูลเข้ากับการติดตามผล ช่วยให้ทีมจัดการงาน Recall และงานซ่อมต่อเนื่องได้ในจุดเดียว'
    },
    {
        number: '04',
        title: 'ระบบติดตามงานเคลม',
        englishTitle: 'Claim Tracking Dashboard',
        category: 'ENTERPRISE DASHBOARD',
        role: 'วิเคราะห์ระบบ ออกแบบ Data Pipeline และพัฒนา Full-Stack',
        overview: 'Web Dashboard สำหรับฝ่ายบริการและฝ่ายเคลม เพื่อติดตามงานซ่อม-เคลมจากสาขาทั่วประเทศ แสดงภาพรวมและรายละเอียดผ่านตัวกรองภาค เขต สาขา ช่วงเวลา และสถานะ SLA โดยไม่ต้องค้นหาทีละรายการใน Legacy System',
        responsibilities: [
            'ศึกษาฐานข้อมูล Legacy และทำความเข้าใจ Business Logic',
            'เชื่อมต่อฐานข้อมูลสองแหล่งผ่าน Direct SQL และ REST API',
            'พัฒนา PHP API สำหรับรายการ สรุปผล กราฟ SLA และการเจาะรายละเอียด',
            'พัฒนา Dashboard ตาราง ตัวกรองแบบต่อเนื่อง กราฟ และสถานะ SLA',
            'ทำระบบ Login, Session Guard, Input Validation และ Parameterized Query'
        ],
        stack: [
            { name: 'Backend', items: ['PHP 5.6+', 'PDO', 'REST API Consumer', 'Session Authentication'] },
            { name: 'Frontend', items: ['Vanilla JavaScript ES6+', 'Chart.js 4', 'Flatpickr', 'CSS'] },
            { name: 'Database & Integration', items: ['Microsoft SQL Server', 'EHong REST API', 'Dual-Database Architecture'] }
        ],
        features: [
            'ตารางรายการงานเคลมพร้อมสถานะปัจจุบันและการเรียงตามวันหรือสถานะ',
            'ตัวกรองแบบต่อเนื่องตามช่วงวัน ภาค เขต สาขา และประเภทรถ',
            'Dashboard สรุปสถานะ พร้อมกราฟรายวันและเปรียบเทียบตามภาค',
            'ติดตาม SLA และกรองรายการที่เกินเวลาที่กำหนด',
            'เจาะดูรายละเอียดงานในระดับสาขา'
        ],
        workflow: ['รับแจ้งงาน', 'รออนุมัติ', 'อนุมัติแล้ว', 'ส่งซ่อม', 'รับคืนแล้ว', 'ปิดงาน'],
        outcomes: [
            'รวมภาพรวมงานเคลมและตัวกรองสำคัญไว้ใน Dashboard เดียว',
            'ตรวจสอบสถานะและ SLA ได้ทันทีโดยไม่ต้องไล่เปิดหลายรายงาน',
            'ช่วยให้ทีมติดตามงานค้างและเจาะดูข้อมูลตามสาขาได้ด้วยตนเอง',
            'รองรับการเชื่อมข้อมูลจากฐานข้อมูลและ API ที่มีข้อจำกัดต่างกัน'
        ],
        highlight: 'ออกแบบการเชื่อมต่อ Dual-Database ให้ดึงข้อมูลจากสองแหล่ง พร้อมคงการทำงานบน Production Server เดิม'
    },
    {
        number: '05',
        title: 'ระบบจองคิวบริการลูกค้า',
        englishTitle: 'Customer Service Appointment Booking',
        category: 'CUSTOMER EXPERIENCE',
        role: 'วิเคราะห์กระบวนการและพัฒนาเว็บแอปพลิเคชัน',
        overview: 'ระบบจองคิวออนไลน์ที่ช่วยให้ลูกค้าสมัครสมาชิก เข้าสู่ระบบ เลือกสาขา ประเภทบริการ วันและเวลาที่ต้องการ พร้อมตรวจสอบสถานะการจองได้ด้วยตนเอง',
        responsibilities: [
            'วิเคราะห์กระบวนการใช้งานและกำหนดฟีเจอร์หลัก',
            'ออกแบบ Flow ให้ลูกค้าสมัคร เข้าสู่ระบบ และจองบริการได้สะดวก',
            'พัฒนาการแสดงข้อมูลการจองและสถานะให้ชัดเจน',
            'ทำงานร่วมกับทีมเพื่อให้ระบบตอบโจทย์ความต้องการขององค์กร'
        ],
        stack: [
            { name: 'Web Application', items: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
            { name: 'Data & Integration', items: ['ฐานข้อมูลลูกค้าและการจอง', 'เชื่อมต่อกับระบบงานหลัก'] }
        ],
        features: [
            'ลูกค้าสมัครสมาชิกและเข้าสู่ระบบได้ด้วยตนเอง',
            'เลือกสาขา ประเภทบริการ วัน และเวลาที่ต้องการ',
            'ช่วยป้องกันการจองซ้ำในช่วงเวลาเดียวกัน',
            'ตรวจสอบสถานะการจองได้ทันที'
        ],
        workflow: ['สมัครหรือเข้าสู่ระบบ', 'เลือกบริการและสาขา', 'เลือกวันและเวลา', 'ยืนยันการจอง', 'ตรวจสอบสถานะ'],
        outcomes: [
            'ลดเวลาและขั้นตอนในการรับคำขอจองบริการ',
            'ลดความผิดพลาดจากการจองแบบแมนนวล',
            'เพิ่มความสะดวกให้ลูกค้าและช่วยจัดระเบียบข้อมูลการจอง',
            'ช่วยยกระดับคุณภาพการให้บริการให้เป็นระบบมากขึ้น'
        ],
        highlight: 'ออกแบบประสบการณ์ตั้งแต่ลูกค้าเลือกบริการไปจนถึงตรวจสอบสถานะการจอง'
    },
    {
        number: '06',
        title: 'ระบบเบิกอะไหล่อัจฉริยะ',
        englishTitle: 'Spare Parts Requisition System',
        category: 'WORKFLOW AUTOMATION',
        role: 'Full-Stack Developer (Solo) · End-to-End Development',
        overview: 'Web Application สำหรับศูนย์ซ่อมบำรุง ให้ช่างและผู้ควบคุมงานเบิกอะไหล่ออนไลน์แทนเอกสารกระดาษ เชื่อมโยงใบงานซ่อมกับคลังสินค้าและกระบวนการอนุมัติ',
        responsibilities: [
            'ออกแบบ Business Logic สำหรับการเบิกและคืนอะไหล่',
            'ออกแบบ Schema และการเชื่อมต่อ PostgreSQL ด้วย Connection Pooling',
            'พัฒนา API ค้นหาใบงานและดึงรายการอะไหล่',
            'พัฒนาการสร้างเอกสาร PDF และเชื่อม Warehouse API',
            'ออกแบบ UI/UX พร้อม Dark Mode'
        ],
        stack: [
            { name: 'Frontend', items: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Dark Mode UI'] },
            { name: 'Backend', items: ['PHP 8', 'Session Management', 'RESTful API', 'PDF Generation'] },
            { name: 'Data & Integration', items: ['PostgreSQL', 'PDO', 'Prepared Statements', 'Warehouse REST API', 'JSON'] }
        ],
        features: [
            'ค้นหาใบงานและดึงข้อมูลลูกค้า รุ่น และรายการอะไหล่',
            'สร้างใบเบิกพร้อมหลายรายการ ปริมาณ ราคา และรหัสอะไหล่',
            'อนุมัติรายการ พร้อมบันทึกผู้อนุมัติและเวลา',
            'สร้างเอกสาร PDF ขนาด A4 หลังผ่านการอนุมัติ',
            'ค้นหาประวัติและเชื่อมตรวจสอบสต็อกกับ Warehouse API'
        ],
        workflow: ['ค้นหาใบงาน', 'สร้างใบเบิก', 'ดึงรายการอะไหล่', 'อนุมัติรายการ', 'ออกเอกสาร PDF'],
        outcomes: [
            'ลดเวลาการเบิกอะไหล่โดยรวมขั้นตอนในระบบเดียว',
            'ลดข้อผิดพลาดจากการกรอกรายการซ้ำด้วยข้อมูลจากใบงาน',
            'ลดการใช้เอกสารกระดาษและตรวจสอบประวัติได้',
            'ควบคุมการออกเอกสารให้เป็นไปตามขั้นตอนอนุมัติ'
        ],
        highlight: 'รับผิดชอบการพัฒนาแบบ End-to-End ตั้งแต่ฐานข้อมูล API และ Workflow อนุมัติ ไปจนถึงเอกสาร PDF'
    },
    {
        number: '07',
        title: 'ระบบจัดการแบตเตอรี่ Serial Number',
        englishTitle: 'SerialBattery Management System',
        category: 'INVENTORY MANAGEMENT',
        role: 'Full-Stack Developer (Solo) · Internal Enterprise Web Application',
        period: '2025–2026',
        overview: 'ระบบจัดการสต็อกแบตเตอรี่และการโอนข้ามคลัง/สาขามากกว่า 7 สาขา ติดตามด้วย Serial Number และเชื่อมข้อมูลกับระบบ ERP เดิม ช่วยแทนการติดตามด้วย Excel และประสานงานทางโทรศัพท์',
        responsibilities: [
            'ออกแบบ Schema ของ PostgreSQL รวมถึง Migration Script',
            'พัฒนา PHP API, Business Logic, Transaction Control และ Data Validation',
            'พัฒนา UI สำหรับใช้งานหน้างานและสแกน Barcode/Serial',
            'เชื่อมต่อข้อมูลแบบ Dual-Write ไปยัง ERP Server สองระบบ',
            'ออกแบบการออกเลข Serial และการจัดการคำขอโอนระหว่างสาขา'
        ],
        stack: [
            { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'jQuery', 'Responsive Design'] },
            { name: 'Backend & Database', items: ['PHP 8', 'PDO', 'PostgreSQL', 'Microsoft SQL Server', 'Session Auth'] },
            { name: 'Integration & Architecture', items: ['Dual-Write', 'ERP EHONGDB', 'EhongAPI Server', 'Atomic Transaction', 'FOR UPDATE Lock'] }
        ],
        features: [
            'รับข้อมูลแบตเตอรี่และออกเลข Serial รองอัตโนมัติ',
            'โอนย้ายแบตเตอรี่พร้อมสแกน Serial ที่หน้างาน',
            'ให้สาขาปลายทางตรวจรับและอัปเดตสต็อก',
            'แสดง Dashboard สต็อก รับเข้า และโอนย้ายของแต่ละสาขา',
            'ซิงก์ข้อมูลกับระบบ ERP และจำกัดข้อมูลตามสิทธิ์สาขา'
        ],
        workflow: ['รับข้อมูลเข้า', 'สร้างรายการโอนและ Serial', 'ตรวจรับที่สาขาปลายทาง', 'ซิงก์ข้อมูล ERP'],
        outcomes: [
            'ลดขั้นตอน Workflow จาก 4 ขั้นเป็น 3 ขั้น',
            'รองรับการทำงานของคลังและสาขามากกว่า 7 แห่ง',
            'ลดความเสี่ยงเลข Serial ซ้ำด้วย Database Lock',
            'ลดการติดตามด้วย Excel และการประสานงานด้วยโทรศัพท์'
        ],
        highlight: 'ออกแบบ Dual-Write และ Atomic Transaction เพื่อประสานข้อมูลระหว่าง PostgreSQL กับ ERP เดิม'
    },
    {
        number: '08',
        title: 'ระบบโอนย้ายสินค้าระหว่างคลังและสาขา',
        englishTitle: 'Stock Transfer System (PWA)',
        category: 'PROGRESSIVE WEB APP',
        role: 'Full-Stack Developer · รับผิดชอบโปรเจกต์ตั้งแต่ต้นจนจบ',
        overview: 'Mobile Web Application สำหรับโอนย้ายสินค้าระหว่างคลังและสาขา พัฒนารูปแบบ PWA เพื่อให้ติดตั้งจากเบราว์เซอร์ได้ เหมาะกับพื้นที่คลังที่สัญญาณอินเทอร์เน็ตไม่เสถียร',
        responsibilities: [
            'ออกแบบ UX และ Flow การโอนย้าย 7 ขั้นตอน',
            'พัฒนา Frontend แบบ SPA พร้อม Router และ State Management',
            'พัฒนา REST API ด้วย PHP และออกแบบฐานข้อมูล',
            'ตั้งค่า PWA, Service Worker, Manifest และ Offline Mode',
            'เชื่อม QR/Barcode Scanner กับกล้องมือถือ'
        ],
        stack: [
            { name: 'Frontend', items: ['HTML5', 'Vanilla JavaScript ES6+', 'Tailwind CSS', 'SPA', 'Hash Router'] },
            { name: 'Backend & Data', items: ['PHP 7.4+', 'REST API', 'MySQL / MariaDB', 'JSON'] },
            { name: 'Mobile Web', items: ['PWA', 'Service Worker', 'Web App Manifest', 'JWT', 'BarcodeDetector API'] }
        ],
        features: [
            'ติดตั้งเป็น PWA บนมือถือได้และรองรับ Offline บางส่วน',
            'สร้าง Flow โอนย้ายตั้งแต่เลือกคลัง ค้นหาสินค้า ระบุจำนวน และยืนยัน',
            'ติดตามสถานะตั้งแต่รออนุมัติจนรับสินค้าเสร็จ',
            'สแกน QR/Barcode ผ่านกล้อง พร้อมทางเลือกกรอกรหัสเอง',
            'Push Notification, Role-Based Access Control และรายงานการโอน'
        ],
        workflow: ['เข้าสู่ระบบ', 'เลือกต้นทางและปลายทาง', 'ค้นหาสินค้า', 'ระบุจำนวน', 'ส่งคำขอ', 'อนุมัติและจัดส่ง', 'ตรวจรับและรายงาน'],
        outcomes: [
            'ย้ายขั้นตอนการโอนจากกระดาษสู่ระบบออนไลน์',
            'ตรวจสอบผู้ดำเนินการ เวลา และรายการย้อนหลังได้',
            'ลดการกรอกรหัสด้วยมือด้วย Barcode Scanner',
            'ใช้งานต่อได้ในพื้นที่คลังที่สัญญาณอ่อน'
        ],
        highlight: 'ออกแบบ Mobile-first PWA ให้ใช้งานและติดตั้งได้จากเบราว์เซอร์ โดยไม่ต้องผ่าน App Store'
    },
    {
        number: '09',
        title: 'ระบบติดตามเช็คระยะและประวัติการติดต่อลูกค้า',
        englishTitle: 'Vehicle Service Follow-up & Contact Tracking System',
        category: 'PRODUCTION INTERNAL TOOL',
        role: 'Developer · วิเคราะห์ ออกแบบ และพัฒนาระบบ',
        period: 'Production · ใช้งานจริงในองค์กร',
        overview: 'Internal Web Tool สำหรับธุรกิจบริการยานยนต์ ใช้ติดตามรถที่ถึงกำหนดเช็คระยะและผลการติดต่อลูกค้า รวมข้อมูลจากฐานข้อมูลหลายแหล่งไว้ใน Dashboard เดียว พร้อมมุมมองตามสาขา เขต และผู้บริหาร',
        responsibilities: [
            'วิเคราะห์กระบวนการทางธุรกิจและแปลงเป็น System Logic',
            'ออกแบบและพัฒนาระบบตั้งแต่หน้าเว็บจนถึง Dashboard และรายงาน',
            'ออกแบบ Data Layer เพื่อรวมข้อมูลจากฐานข้อมูลองค์กรและข้อมูลการติดต่อ',
            'ออกแบบ UI/UX สำหรับการใช้งานจริงในสภาพแวดล้อมองค์กร',
            'ดูแล Migration และความเข้ากันได้ของ Schema'
        ],
        stack: [
            { name: 'Backend & Frontend', items: ['PHP (PDO)', 'HTML', 'CSS', 'Bootstrap 3', 'JavaScript', 'AJAX'] },
            { name: 'Data & Environment', items: ['Microsoft SQL Server', 'PostgreSQL', 'PHP Session', 'Apache (XAMPP)'] }
        ],
        features: [
            'Dashboard รถที่ถึงกำหนดเช็คระยะ เช่น รอบ 2, 6 และ 10 เดือน',
            'กรองข้อมูลตามเขตและสาขา พร้อมยอดรวมและรายละเอียดสถานะ',
            'บันทึกผลติดต่อ เช่น ติดต่อได้ ไม่รับสาย หรือวางสาย พร้อมเวลาและผู้บันทึก',
            'รายงานรถที่ติดตามแล้วแต่ยังไม่ได้เข้ารับบริการ',
            'ซิงก์ข้อมูลรถจากระบบหลักและรองรับ Maintenance Mode'
        ],
        workflow: ['ดึงข้อมูลรถและรอบเช็คระยะ', 'กรองงานตามเขตหรือสาขา', 'ติดต่อและบันทึกผล', 'ติดตามรถที่ยังไม่เข้ารับบริการ', 'ดูรายงานและประวัติ'],
        outcomes: [
            'รวมข้อมูลจากหลายแหล่งไว้ใน Dashboard เดียว',
            'เพิ่มความครอบคลุมในการติดตามด้วยสถานะและประวัติการโทร',
            'ลดการตกหล่นจากการจดจำหรือบันทึกด้วยมือ',
            'ช่วยให้ผู้บริหารติดตามภาพรวมแยกตามสาขาและเขตได้'
        ],
        highlight: 'ใช้งานจริงในองค์กร พร้อม Dual-Database Architecture และ Schema Auto-Migration เพื่อรองรับระบบเดิม'
    }
];

const PORTFOLIO_PROJECTS_EN = {
    '02': {
        title: 'Vehicle Service Follow-up & Customer Contact Tracker',
        overview: 'A service-team web application for tracking customers due for vehicle maintenance and follow-up contact. It brings customer status and contact history into one view, with summaries by region, branch, and service interval.',
        role: 'Business process analysis and web application development',
        highlight: 'Transforms scattered customer follow-up information into a practical daily view for service teams.',
        responsibilities: ['Analyzed service workflows and translated requirements into a working system.', 'Built the main web interface for service tracking.', 'Standardized customer contact records and status updates.', 'Presented information clearly to support team decisions.'],
        features: ['Summarizes follow-up work by region and branch.', 'Filters and searches work by status.', 'Keeps customer contact history and status in one view.', 'Helps teams review progress quickly.'],
        workflow: ['Gather customer data', 'Group by region and branch', 'Review due follow-ups', 'Record contact results', 'Track status and history'],
        outcomes: ['Speeds up follow-up and reduces delays.', 'Gives teams a shared view and reduces missed or duplicate contacts.', 'Supports timely decisions with clearer information.', 'Improves branch- and region-level operations.']
    },
    '03': {
        title: 'VIN Recall Tracker / Follow-up Repairs',
        overview: 'A web application for managing vehicle recall and follow-up repair cases. It supports data imports, validation, search, case tracking, and historical records.',
        role: 'Business analysis and core system feature development',
        highlight: 'Connects imported recall data with case tracking and follow-up history in one place.',
        responsibilities: ['Analyzed real team workflows and requirements.', 'Designed and developed the system’s core features.', 'Maintained data import, search, and case follow-up flows.', 'Improved responsiveness and reduced operational delays.'],
        features: ['Imports vehicle data from files to reduce manual entry.', 'Searches vehicle records and tracks case status.', 'Highlights cases requiring action.', 'Maintains a searchable follow-up history.'],
        workflow: ['Receive factory data file', 'Import data', 'Validate and store records', 'Search and follow up', 'Review status and history'],
        outcomes: ['Reduces manual steps in the workflow.', 'Speeds up searches and follow-up.', 'Makes case status easier to review.', 'Reduces data errors and improves issue response.']
    },
    '04': {
        title: 'Claim Tracking Dashboard',
        overview: 'A dashboard for service and claims teams to track repair claims across branches. It combines data views, regional filters, branch drill-down, charts, and SLA tracking.',
        role: 'System analysis, data pipeline design, and full-stack development',
        highlight: 'Combines data from two sources through a dual-database design while supporting the existing production environment.',
        responsibilities: ['Reverse-engineered legacy database structures and business logic.', 'Connected two data sources through direct SQL and REST APIs.', 'Built PHP endpoints for lists, summaries, charts, SLA, and drill-down views.', 'Developed the dashboard, filters, charts, and authentication.', 'Applied input validation and parameterized queries.'],
        features: ['Lists claims with current stage and date/status sorting.', 'Filters by date, region, zone, branch, and vehicle type.', 'Shows claim summaries and regional charts.', 'Tracks SLA and highlights overdue claims.', 'Drills down to branch-level work.'],
        workflow: ['Claim received', 'Awaiting approval', 'Approved', 'Repair in progress', 'Vehicle returned', 'Claim closed'],
        outcomes: ['Provides a single dashboard for claims and key filters.', 'Makes claim stages and SLA easier to review.', 'Lets teams inspect branch-level work directly.', 'Integrates data from sources with different access constraints.']
    },
    '05': {
        title: 'Customer Service Appointment Booking',
        overview: 'An online booking system where customers can register, sign in, select a branch and service, choose a time slot, and track their booking status.',
        role: 'Workflow analysis and web application development',
        highlight: 'Covers the customer journey from selecting a service to checking booking status.',
        responsibilities: ['Analyzed user workflows and defined core features.', 'Designed a simple registration and booking journey.', 'Built clear booking and status views.', 'Collaborated with the team to meet organizational needs.'],
        features: ['Customer self-registration and sign-in.', 'Selection of branch, service, date, and time.', 'Prevention of duplicate bookings for the same slot.', 'Immediate access to booking status.'],
        workflow: ['Register or sign in', 'Choose service and branch', 'Select a date and time', 'Confirm booking', 'Check booking status'],
        outcomes: ['Reduces booking intake time and steps.', 'Reduces errors from manual bookings.', 'Makes booking details easier to manage.', 'Improves the consistency of customer service.']
    },
    '06': {
        title: 'Spare Parts Requisition System',
        overview: 'A web application for repair centers to request parts online, linked to repair job numbers and warehouse inventory, with an approval workflow and printable documents.',
        role: 'Solo full-stack developer · End-to-end development',
        highlight: 'Delivered end-to-end, from database and APIs to approval workflow and PDF documents.',
        responsibilities: ['Designed business logic for parts requisitions and returns.', 'Designed the database schema and PostgreSQL connection layer.', 'Built APIs to find repair jobs and retrieve parts.', 'Implemented PDF generation and warehouse API integration.', 'Designed a user-friendly interface with dark mode.'],
        features: ['Looks up job details and related parts.', 'Creates requisitions with multiple items and quantities.', 'Records approver and approval time.', 'Generates A4 PDF documents after approval.', 'Searches history and checks warehouse stock.'],
        workflow: ['Find repair job', 'Create requisition', 'Load parts', 'Approve request', 'Generate PDF'],
        outcomes: ['Combines the requisition workflow in one system.', 'Reduces errors by using repair-job data.', 'Reduces paperwork and preserves an audit history.', 'Ensures documents follow the approval process.']
    },
    '07': {
        title: 'SerialBattery Management System',
        overview: 'An inventory and inter-branch battery transfer system that tracks serial numbers across more than seven branches and synchronizes data with the existing ERP.',
        role: 'Solo full-stack developer · Internal enterprise web application',
        highlight: 'Uses dual-write and atomic transactions to coordinate PostgreSQL with the existing ERP.',
        responsibilities: ['Designed the PostgreSQL schema and migration scripts.', 'Built PHP APIs, business logic, transactions, and validation.', 'Developed a responsive interface for barcode and serial scanning.', 'Integrated dual-write synchronization with two ERP servers.', 'Implemented serial-number generation and branch transfers.'],
        features: ['Receives battery records and generates secondary serial numbers.', 'Transfers batteries between branches with serial scanning.', 'Lets destination branches confirm receipt and update stock.', 'Displays inventory, receipts, and transfers by branch.', 'Synchronizes with ERP and scopes access by branch.'],
        workflow: ['Receive inventory', 'Create transfer and serial number', 'Confirm at destination branch', 'Synchronize with ERP'],
        outcomes: ['Reduced the workflow from four steps to three.', 'Supports more than seven branches.', 'Prevents duplicate serials with database locking.', 'Replaced spreadsheet tracking and phone coordination.']
    },
    '08': {
        title: 'Stock Transfer System (PWA)',
        overview: 'A mobile-first web application for transferring stock between warehouses and branches. Its PWA design supports installation from a browser and selected offline use.',
        role: 'Full-stack developer · Project ownership from start to finish',
        highlight: 'A mobile-first PWA that can be installed from the browser without an app-store release.',
        responsibilities: ['Designed the seven-step transfer experience.', 'Built the SPA frontend, router, and state management.', 'Developed PHP REST APIs and the database.', 'Configured the PWA, service worker, manifest, and offline support.', 'Integrated QR/barcode scanning with mobile cameras.'],
        features: ['Installs from the browser and supports selected offline use.', 'Guides users through source, destination, items, and quantities.', 'Tracks transfers from approval through receipt.', 'Scans QR/barcodes with a manual-entry fallback.', 'Supports notifications, role-based access, and reports.'],
        workflow: ['Sign in', 'Choose source and destination', 'Find items', 'Enter quantities', 'Submit request', 'Approve and ship', 'Receive and report'],
        outcomes: ['Moves stock transfers from paper to an online workflow.', 'Records actions, timestamps, items, and responsible users.', 'Reduces manual entry with barcode scanning.', 'Supports work in low-connectivity warehouse areas.']
    },
    '09': {
        title: 'Vehicle Service Follow-up & Contact Tracking System',
        overview: 'A production internal tool for tracking vehicles due for maintenance and customer contact. It unifies data from multiple sources in a dashboard with branch and regional views.',
        role: 'Developer · System analysis, design, and implementation',
        highlight: 'A production system with a dual-database architecture and schema auto-migration for legacy compatibility.',
        responsibilities: ['Analyzed business processes and translated them into system logic.', 'Developed the application from data layer through dashboard and reports.', 'Unified organizational and customer-contact data sources.', 'Designed the interface for real operational use.', 'Maintained migrations and legacy schema compatibility.'],
        features: ['Tracks vehicles due for scheduled maintenance.', 'Filters by zone and branch with status summaries.', 'Records contact outcomes, timestamps, and staff members.', 'Lists contacted vehicles that have not returned for service.', 'Synchronizes vehicle data and supports maintenance mode.'],
        workflow: ['Load vehicle and service-interval data', 'Filter by zone or branch', 'Contact customer and record result', 'Follow up on vehicles not yet serviced', 'Review reports and history'],
        outcomes: ['Unifies multiple data sources in one dashboard.', 'Improves follow-up coverage with contact history.', 'Reduces missed work caused by manual tracking.', 'Gives managers branch- and region-level visibility.']
    }
};

const STACK_LABELS_EN = {
    'เชื่อมต่อฐานข้อมูลหลายแหล่ง': 'Multiple database connections',
    'ฐานข้อมูลสำหรับสถานะและประวัติ': 'Database for status and history',
    'นำเข้าข้อมูลจากไฟล์': 'File data imports'
};

function getProjectLanguage() {
    return document.documentElement.lang === 'th' ? 'th' : 'en';
}

function createTextElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
}

function renderExtraPortfolioProjects() {
    const grid = document.getElementById('portfolioProjectsExtra');
    if (!grid) return;
    grid.replaceChildren();
    const isEnglish = getProjectLanguage() === 'en';

    PORTFOLIO_PROJECTS.forEach(project => {
        const english = PORTFOLIO_PROJECTS_EN[project.number];
        const title = isEnglish ? english.title : project.title;
        const overview = isEnglish ? english.overview : project.overview;
        const card = document.createElement('article');
        card.className = 'portfolio-project-card';

        const copy = document.createElement('div');
        copy.className = 'portfolio-project-copy';
        copy.append(
            createTextElement('div', 'portfolio-project-number', `PROJECT ${project.number}`),
            createTextElement('div', 'portfolio-project-type', project.category),
            createTextElement('h2', 'portfolio-project-title', title),
            createTextElement('p', 'portfolio-project-description', overview)
        );

        const tags = document.createElement('div');
        tags.className = 'portfolio-tags';
        tags.setAttribute('aria-label', isEnglish ? 'Key technologies' : 'เทคโนโลยีหลัก');
        const mainStack = project.stack.flatMap(group => group.items);
        [...new Set(mainStack)].slice(0, 4).forEach(item => tags.append(createTextElement('span', '', item)));
        copy.append(tags);

        const link = document.createElement('a');
        link.className = 'btn btn-primary portfolio-project-link';
        link.href = `project-detail.html?project=${project.number}`;
        link.append(document.createTextNode(isEnglish ? 'View project details ' : 'ดูรายละเอียดโปรเจกต์ '));
        link.append(createTextElement('span', '', '→'));
        copy.append(link);

        const art = document.createElement('div');
        art.className = 'portfolio-project-art';
        art.setAttribute('role', 'img');
        art.setAttribute('aria-label', `${isEnglish ? 'Illustration for' : 'ภาพประกอบ'} ${title}`);
        const window = document.createElement('div');
        window.className = 'portfolio-art-window';
        const header = document.createElement('div');
        header.className = 'portfolio-art-window-header';
        header.append(
            createTextElement('span', '', `PROJECT / ${project.number}`),
            createTextElement('span', 'portfolio-art-status', project.category)
        );
        const flow = document.createElement('div');
        flow.className = 'portfolio-art-flow';
        project.workflow.slice(0, 6).forEach((step, index) => {
            const stepCard = document.createElement('div');
            stepCard.className = 'portfolio-art-step';
            stepCard.append(
                createTextElement('strong', '', `${String(index + 1).padStart(2, '0')} / STEP`),
                createTextElement('span', '', step)
            );
            flow.append(stepCard);
        });
        window.append(header, flow);
        art.append(window);
        card.append(copy, art);
        grid.append(card);
    });
}

function renderProjectDetail() {
    const root = document.getElementById('projectDetail');
    if (!root) return;

    root.replaceChildren();
    const number = new URLSearchParams(window.location.search).get('project');
    const isEnglish = getProjectLanguage() === 'en';
    const project = PORTFOLIO_PROJECTS.find(item => item.number === number);
    if (!project) {
        document.title = isEnglish ? 'Project not found | Portfolio' : 'ไม่พบโปรเจกต์ | Portfolio';
        root.append(
            createTextElement('div', 'section-label', 'PROJECT NOT FOUND'),
            createTextElement('h1', 'section-title', isEnglish ? 'Project not found' : 'ไม่พบโปรเจกต์นี้'),
            createTextElement('p', 'detail-lead', isEnglish ? 'This project may no longer be available or the link may have changed.' : 'โปรเจกต์ที่ต้องการอาจไม่มีอยู่หรือมีการเปลี่ยนแปลงลิงก์')
        );
        const back = createTextElement('a', 'btn btn-primary', isEnglish ? 'Back to portfolio' : 'กลับไปหน้า Portfolio');
        back.href = 'portfolio.html';
        root.append(back);
        return;
    }

    document.title = `Project ${project.number} | ${project.englishTitle}`;
    const english = PORTFOLIO_PROJECTS_EN[project.number];
    const title = isEnglish ? english.title : project.title;
    const overview = isEnglish ? english.overview : project.overview;
    const role = isEnglish ? english.role : project.role;
    const responsibilities = isEnglish ? english.responsibilities : project.responsibilities;
    const features = isEnglish ? english.features : project.features;
    const workflowSteps = isEnglish ? english.workflow : project.workflow;
    const outcomes = isEnglish ? english.outcomes : project.outcomes;
    const hero = document.createElement('header');
    hero.className = 'detail-hero';
    const heroContainer = document.createElement('div');
    heroContainer.className = 'container';
    const back = createTextElement('a', 'detail-back', isEnglish ? '← Back to portfolio' : '← กลับไปหน้า Portfolio');
    back.href = 'portfolio.html';
    heroContainer.append(
        back,
        createTextElement('div', 'section-label', `PROJECT ${project.number} / ${project.category}`),
        createTextElement('h1', 'section-title', title),
        createTextElement('p', 'detail-lead', overview),
        createTextElement('p', 'detail-project-subtitle', project.englishTitle),
        createTextElement('p', 'detail-project-role', `${isEnglish ? 'Role' : 'บทบาท'}: ${role}`)
    );
    if (project.period) heroContainer.append(createTextElement('p', 'detail-project-period', project.period));
    hero.append(heroContainer);
    root.append(hero);

    function addSection(label, title, content) {
        const section = document.createElement('section');
        section.className = 'detail-section';
        const container = document.createElement('div');
        container.className = 'container';
        const heading = document.createElement('div');
        heading.className = 'detail-section-heading';
        heading.append(createTextElement('div', 'section-label', label));
        heading.append(createTextElement('h2', 'section-title', title));
        container.append(heading, content);
        section.append(container);
        root.append(section);
    }

    function listPanel(items, className = 'detail-panel') {
        const panel = document.createElement('div');
        panel.className = className;
        const list = document.createElement('ul');
        items.forEach(item => list.append(createTextElement('li', '', item)));
        panel.append(list);
        return panel;
    }

    addSection('PROJECT OVERVIEW', isEnglish ? 'Project overview' : 'ภาพรวมโปรเจกต์', createTextElement('div', 'detail-panel', overview));
    addSection('MY RESPONSIBILITIES', isEnglish ? 'Responsibilities' : 'บทบาทและความรับผิดชอบ', listPanel(responsibilities));

    const stackGrid = document.createElement('div');
    stackGrid.className = 'detail-stack-grid';
    project.stack.forEach(group => {
        const card = document.createElement('article');
        card.className = 'detail-card detail-stack-card';
        card.append(createTextElement('h3', '', group.name));
        const tags = document.createElement('div');
        tags.className = 'detail-tags';
        group.items.forEach(item => tags.append(createTextElement('span', '', isEnglish ? (STACK_LABELS_EN[item] || item) : item)));
        card.append(tags);
        stackGrid.append(card);
    });
    addSection('TECHNOLOGY STACK', isEnglish ? 'Technology stack' : 'เทคโนโลยีที่ใช้', stackGrid);

    const featureGrid = document.createElement('div');
    featureGrid.className = 'detail-grid';
    features.forEach((feature, index) => {
        const card = document.createElement('article');
        card.className = 'detail-card';
        card.append(createTextElement('h3', '', `${isEnglish ? 'Feature' : 'ความสามารถ'} ${String(index + 1).padStart(2, '0')}`));
        card.append(createTextElement('p', '', feature));
        featureGrid.append(card);
    });
    addSection('SYSTEM FEATURES', isEnglish ? 'Key features' : 'ความสามารถหลักของระบบ', featureGrid);

    const workflow = document.createElement('div');
    workflow.className = 'workflow-grid';
    workflow.setAttribute('aria-label', isEnglish ? 'Workflow steps' : 'ลำดับการทำงาน');
    workflowSteps.forEach(step => workflow.append(createTextElement('div', 'workflow-step', step)));
    addSection('WORKFLOW', isEnglish ? 'Workflow' : 'ลำดับการทำงาน', workflow);
    addSection('PROJECT OUTCOME', isEnglish ? 'Project outcomes' : 'ผลลัพธ์ของโปรเจกต์', listPanel(outcomes, 'detail-panel detail-outcome'));

    const highlight = createTextElement('div', 'detail-panel detail-outcome', isEnglish ? english.highlight : project.highlight);
    addSection('KEY HIGHLIGHT', isEnglish ? 'Project highlight' : 'จุดเด่นของโปรเจกต์', highlight);

    const footerSection = document.createElement('section');
    footerSection.className = 'detail-section';
    const footerContainer = document.createElement('div');
    footerContainer.className = 'container';
    const portfolioLink = createTextElement('a', 'btn btn-outline', isEnglish ? '← Explore more projects' : '← กลับไปดูโปรเจกต์อื่น');
    portfolioLink.href = 'portfolio.html';
    footerContainer.append(portfolioLink);
    footerSection.append(footerContainer);
    root.append(footerSection);
}

renderExtraPortfolioProjects();
renderProjectDetail();
document.addEventListener('portfolio-language-change', () => {
    renderExtraPortfolioProjects();
    renderProjectDetail();
});
