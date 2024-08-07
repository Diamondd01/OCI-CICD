
describe('Form setup', ()=> {
    beforeEach(()=>{
        document.body.innerHTML=`
        <form id="weatherForm">
        <label for="cityNameInput">Enter City Name:</label>
        <input type="text" id="cityNameInput" name="cityNameInput" required>
        <button type="submit">Get Forecast</button>
        </form>`;
        global.fetch=jest.fn();
        require('../Public/script')
    })
    test('handles network errors',async()=>{
        global.fetch.mockRejectedValueOnce(new Error('Network Error'))
        const event ={
            preventDefault: jest.fn()
        };
        const form = document.getElementById('weatherForm')
        form.dispatchEvent(new Event('submit'))

        await new Promise(process.nextTick)

        const weatherInfo = document.getElementById('weatherInfo')
        expect(weatherInfo.innerHTML).toContain('Failed to fetch weather data for Miami.Please Try Again')
    })

})