import {fetchSampleData} from '../../effects/sample'

jest.unmock('../../effects/sample.js')

describe('[Effects]', () => {

	test('"fetchSampleData" should return jsonResponse', () => {

		const data = [{foo: 'bar'}]

		window.fetch = jest.fn()
		.mockImplementation(() =>
			Promise.resolve(window.mockResponse(200, null, JSON.stringify(data))))

		return fetchSampleData()
		.then(res => {
			expect(res).toEqual(data)
		})
	})

})
