import { create } from "zustand";

export const useBlogConstructor = create((set, get) => ({
	blogElements: [{
			'type': 'header',
			'content': ''
		}
	],

	blogEditHelper: {
		'status': false,
		'blogDateAdded': '',
		'blogId': ''
	},

	setBlogEditHelper: (bool, date, id) => {		
		set({ blogEditHelper: {
			'status': bool,
			'dateAdded': date,
			'id': id
		} })
	},

	reset: () => {
		set({ blogElements: [{
			'type': 'header',
			'content': ''
		}]})
		set({ editBool: false })
	},

	setBlogElements: (newBlogElements) => {
		set({ blogElements: newBlogElements })
	},

	addElement: (newElement) => {
		get().setBlogElements([...get().blogElements, { type: newElement, content: '' }]) 
  },

	updateHeader: (newHeader) => {
		let newArray = get().blogElements.map(blog => ({...blog}))

		newArray[0].content = newHeader
		get().setBlogElements(newArray)
	},

	remove: (index) => {
		const newArray = get().blogElements.filter(
			(element, arrayIndex) => arrayIndex !== index
		) 
		get().setBlogElements(newArray)
	},

	moveUp: (index) => {		
		if (index === 1) {
			return 
		}
		let newArray = get().blogElements.map(blog => ({...blog}))
		
		let temp = newArray[index]
		newArray[index] = newArray[index - 1] 
		newArray[index - 1] = temp 
		get().setBlogElements(newArray)
	},

	moveDown: (index) => {
		if (index === get().blogElements.length - 1) {
			return
		}
		let newArray = get().blogElements.map(blog => ({...blog}))

		let temp = newArray[index]
		newArray[index] = newArray[index + 1] 
		newArray[index + 1] = temp 
		get().setBlogElements(newArray)
	},

	update: (text, index) => {
		let newArray = get().blogElements.map(blog => ({...blog}))

		newArray[index].content = text 
		get().setBlogElements(newArray)
	} 
}))


export const usePage = create((set) => ({
	page: 1,
	setPage: (newPage) => {
		set({ page: newPage })
	}
}))


export const useUser = create((set) => ({
	user: null,
	setUser: (newUser) => {
		set({ user: newUser })
	},
}));


export const useExitButton = create((set) => ({
	exitButtonBool: false,
	setExitButtonBool: (newState) => {
		set({ exitButtonBool: newState})
	}
}))


export const useBlogForm = create((set) => ({
	blogForm: false,
	setBlogForm: (newState) => {
		set({ blogForm: newState})
	}
}))

export const baseUrl = 'http://localhost:3003'