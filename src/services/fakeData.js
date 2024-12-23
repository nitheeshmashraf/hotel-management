export const fakeBookings = [
  {
    id: 1,
    guestName: 'John Doe',
    contactNumber: '+97155234234',
    checkIn: '2024-12-20',
    checkOut: '2024-12-25',
    room: '101',
    occupants: 2,
    total: 100,
    paymentModes: [],
    totalPaid: 0,
    balancetoPay: 100,
    is_checkedOut: false,
    bookingDate: '2024-12-10',
    status: 'Confirmed',
  },
  {
    id: 2,
    guestName: 'Jane Smith',
    contactNumber: '+97155234235',
    checkIn: '2024-12-22',
    checkOut: '2024-12-27',
    room: '102',
    occupants: 1,
    total: 150,
    paymentModes: [
      { mode: 'Cash', amount: 75 },
      { mode: 'Google Pay', amount: 75 },
    ],
    totalPaid: 150,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-15',
    status: 'Confirmed',
  },
  {
    id: 3,
    guestName: 'Michael Lee',
    contactNumber: '+97155234236',
    checkIn: '2024-12-18',
    checkOut: '2024-12-23',
    room: '103',
    occupants: 3,
    total: 200,
    paymentModes: [{ mode: 'Cash', amount: 100 }],
    totalPaid: 100,
    balancetoPay: 100,
    is_checkedOut: false,
    bookingDate: '2024-12-12',
    status: 'Pending',
  },
  {
    id: 4,
    guestName: 'Sarah Brown',
    contactNumber: '+97155234237',
    checkIn: '2024-12-23',
    checkOut: '2024-12-28',
    room: '104',
    occupants: 2,
    total: 180,
    paymentModes: [{ mode: 'Credit Card', amount: 180 }],
    totalPaid: 180,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-18',
    status: 'Confirmed',
  },
  {
    id: 5,
    guestName: 'Chris Evans',
    contactNumber: '+97155234238',
    checkIn: '2024-12-25',
    checkOut: '2024-12-30',
    room: '105',
    occupants: 4,
    total: 250,
    paymentModes: [
      { mode: 'Cash', amount: 125 },
      { mode: 'Google Pay', amount: 125 },
    ],
    totalPaid: 250,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-20',
    status: 'Confirmed',
  },
  {
    id: 6,
    guestName: 'Olivia Johnson',
    contactNumber: '+97155234239',
    checkIn: '2024-12-15',
    checkOut: '2024-12-20',
    room: '106',
    occupants: 1,
    total: 80,
    paymentModes: [
      { mode: 'Cash', amount: 40 },
      { mode: 'Credit Card', amount: 40 },
    ],
    totalPaid: 80,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-10',
    status: 'Confirmed',
  },
  {
    id: 7,
    guestName: 'Emma Wilson',
    contactNumber: '+97155234240',
    checkIn: '2024-12-17',
    checkOut: '2024-12-22',
    room: '107',
    occupants: 2,
    total: 120,
    paymentModes: [
      { mode: 'PayPal', amount: 60 },
      { mode: 'Cash', amount: 60 },
    ],
    totalPaid: 120,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-12',
    status: 'Confirmed',
  },
  {
    id: 8,
    guestName: 'Liam Scott',
    contactNumber: '+97155234241',
    checkIn: '2024-12-14',
    checkOut: '2024-12-19',
    room: '108',
    occupants: 2,
    total: 110,
    paymentModes: [
      { mode: 'Credit Card', amount: 55 },
      { mode: 'Cash', amount: 55 },
    ],
    totalPaid: 110,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-10',
    status: 'Confirmed',
  },
  {
    id: 9,
    guestName: 'Sophia Taylor',
    contactNumber: '+97155234242',
    checkIn: '2024-12-18',
    checkOut: '2024-12-23',
    room: '109',
    occupants: 1,
    total: 70,
    paymentModes: [{ mode: 'Google Pay', amount: 70 }],
    totalPaid: 70,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-12',
    status: 'Confirmed',
  },
  {
    id: 10,
    guestName: 'Lucas Harris',
    contactNumber: '+97155234243',
    checkIn: '2024-12-21',
    checkOut: '2024-12-26',
    room: '110',
    occupants: 3,
    total: 200,
    paymentModes: [
      { mode: 'Cash', amount: 100 },
      { mode: 'Credit Card', amount: 100 },
    ],
    totalPaid: 200,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-18',
    status: 'Confirmed',
  },
  {
    id: 11,
    guestName: 'Mason Clark',
    contactNumber: '+97155234244',
    checkIn: '2024-12-10',
    checkOut: '2024-12-15',
    room: '111',
    occupants: 2,
    total: 130,
    paymentModes: [
      { mode: 'Cash', amount: 60 },
      { mode: 'Credit Card', amount: 70 },
    ],
    totalPaid: 130,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-05',
    status: 'Confirmed',
  },
  {
    id: 12,
    guestName: 'Ava Lewis',
    contactNumber: '+97155234245',
    checkIn: '2024-12-20',
    checkOut: '2024-12-25',
    room: '112',
    occupants: 2,
    total: 90,
    paymentModes: [
      { mode: 'Google Pay', amount: 45 },
      { mode: 'Cash', amount: 45 },
    ],
    totalPaid: 90,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-10',
    status: 'Confirmed',
  },
  {
    id: 13,
    guestName: 'Isabella Young',
    contactNumber: '+97155234246',
    checkIn: '2024-12-18',
    checkOut: '2024-12-23',
    room: '113',
    occupants: 1,
    total: 80,
    paymentModes: [{ mode: 'Cash', amount: 80 }],
    totalPaid: 80,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-12',
    status: 'Confirmed',
  },
  {
    id: 14,
    guestName: 'Ethan Walker',
    contactNumber: '+97155234247',
    checkIn: '2024-12-23',
    checkOut: '2024-12-28',
    room: '114',
    occupants: 3,
    total: 160,
    paymentModes: [{ mode: 'Credit Card', amount: 160 }],
    totalPaid: 160,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-18',
    status: 'Confirmed',
  },
  {
    id: 15,
    guestName: 'James Lee',
    contactNumber: '+97155234248',
    checkIn: '2024-12-10',
    checkOut: '2024-12-15',
    room: '115',
    occupants: 1,
    total: 50,
    paymentModes: [{ mode: 'Cash', amount: 50 }],
    totalPaid: 50,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-05',
    status: 'Confirmed',
  },
  {
    id: 16,
    guestName: 'Charlotte White',
    contactNumber: '+97155234249',
    checkIn: '2024-12-22',
    checkOut: '2024-12-27',
    room: '116',
    occupants: 2,
    total: 140,
    paymentModes: [
      { mode: 'PayPal', amount: 70 },
      { mode: 'Credit Card', amount: 70 },
    ],
    totalPaid: 140,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-15',
    status: 'Confirmed',
  },
  {
    id: 17,
    guestName: 'Amelia King',
    contactNumber: '+97155234250',
    checkIn: '2024-12-18',
    checkOut: '2024-12-23',
    room: '117',
    occupants: 1,
    total: 120,
    paymentModes: [{ mode: 'Cash', amount: 120 }],
    totalPaid: 120,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-12',
    status: 'Confirmed',
  },
  {
    id: 18,
    guestName: 'Benjamin Wright',
    contactNumber: '+97155234251',
    checkIn: '2024-12-14',
    checkOut: '2024-12-19',
    room: '118',
    occupants: 2,
    total: 110,
    paymentModes: [{ mode: 'Google Pay', amount: 110 }],
    totalPaid: 110,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-10',
    status: 'Confirmed',
  },
  {
    id: 19,
    guestName: 'Henry Gonzalez',
    contactNumber: '+97155234252',
    checkIn: '2024-12-16',
    checkOut: '2024-12-21',
    room: '119',
    occupants: 3,
    total: 170,
    paymentModes: [{ mode: 'PayPal', amount: 170 }],
    totalPaid: 170,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-12',
    status: 'Confirmed',
  },
  {
    id: 20,
    guestName: 'Ella Martinez',
    contactNumber: '+97155234253',
    checkIn: '2024-12-20',
    checkOut: '2024-12-25',
    room: '120',
    occupants: 2,
    total: 100,
    paymentModes: [{ mode: 'Credit Card', amount: 100 }],
    totalPaid: 100,
    balancetoPay: 0,
    is_checkedOut: true,
    bookingDate: '2024-12-10',
    status: 'Confirmed',
  },
]

export const fakeRooms = [
  { id: 1, number: '101', type: 'Single', status: 'active' },
  { id: 2, number: '102', type: 'Double', status: 'active' },
  { id: 3, number: '103', type: 'Suite', status: 'active' },
  { id: 4, number: '104', type: 'Single', status: 'inactive' },
  { id: 5, number: '105', type: 'Double', status: 'active' },
  { id: 6, number: '106', type: 'Suite', status: 'inactive' },
  { id: 7, number: '107', type: 'Single', status: 'active' },
  { id: 8, number: '108', type: 'Double', status: 'inactive' },
  { id: 9, number: '109', type: 'Suite', status: 'active' },
  { id: 10, number: '110', type: 'Single', status: 'active' },
  { id: 11, number: '111', type: 'Double', status: 'inactive' },
  { id: 12, number: '112', type: 'Suite', status: 'active' },
  { id: 13, number: '113', type: 'Single', status: 'inactive' },
  { id: 14, number: '114', type: 'Double', status: 'active' },
  { id: 15, number: '115', type: 'Suite', status: 'inactive' },
  { id: 16, number: '116', type: 'Single', status: 'active' },
  { id: 17, number: '117', type: 'Double', status: 'active' },
  { id: 18, number: '118', type: 'Suite', status: 'inactive' },
  { id: 19, number: '119', type: 'Single', status: 'active' },
  { id: 20, number: '120', type: 'Double', status: 'inactive' },
]
