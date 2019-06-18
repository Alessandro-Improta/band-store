export const products = [
	{
		id: 1,
		title: "Red Crest T-Shirt",
		price: 20,
		description: "Cotton t-shirt with the Michael Barrow and The Tourists crest on the chest",
		image: require("./../../../images/red-crest.jpg"),
		inCart: false,
		count: 0,
		total: 0,
		options: [{ value:"S", label: "small" }, { value:"M", label: "medium" }, { value:"L", label: "large" }, { value:"XL", label: "extra large" } ]
	},
	{
		id: 2,
		title: "I am a Tourist",
		price: 30,
		description: "Soft cotton blend t-shirt that announces to the world that you are in fact a Tourist",
		image: require("./../../../images/tourist.jpg"),
		inCart: false,
		count: 0,
		total: 0,
		options: [{ value:"S", label: "small" }, { value:"M", label: "medium" }, { value:"L", label: "large" }, { value:"XL", label: "extra large" } ]
	},
	{
		id: 3,
		title: "Red Crest + I am a Tourist T-shirts",
		price: 45,
		description: "Bundle and Save!",
		image: require("./../../../images/both-shirts.jpg"),
		inCart: false,
		count: 0,
		total: 0,
		options: [{ value:"S", label: "small" }, { value:"M", label: "medium" }, { value:"L", label: "large" }, { value:"XL", label: "extra large" } ]
	},
];

export const dates = [
	{
		date: "March 16",
		city: 'Camas, WA',
		venue: 'Union High School',
		tickets: ''
	},
	{
		date: "March 30",
		city: "Provo, UT",
		venue: "Velour Live Music Gallery",
		tickets: "https://www.24tix.com/event/1350167901/motion-coaster"
	},
	{
		date: "April 5",
		city: 'Logan, UT',
		venue: "Why Sound",
		tickets: ''
	},
	{
		date: "June 10",
		city: "St. George, UT",
		venue: "",
		tickets: ''
	},
	{
		date: 'June 28',
		city: 'Salt Lake City, UT',
		venue: 'Venture Out! Festival',
		tickets: ''
	},
	{
		date: 'June 29',
		city: 'Springville, UT',
		venue: 'Springville City Library',
		tickets: ''
	},
	{
		date: 'July 4',
		city: 'Clearfield, UT',
		venue: '',
		tickets: ''
	},
	{
		date: 'July 5',
		city: 'Eagle Mountain, UT',
		venue: '',
		tickets: ''
	},
	{
		date: 'July 15',
		city: 'Lehi, UT',
		venue: '',
		tickets: ''
	}
	// {
	// 	date:
	// 	city:
	// 	venue:
	// 	tickets:
	// }
];

