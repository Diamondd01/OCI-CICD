
describe('Form setup', ()=> {
    beforeEach(()=>{
        document.body.innerHTML=`
        <form id="weatherForm">
        <label for="cityNameInput">Enter City Name:</label>
        <input type="text" id="cityNameInput" name="cityNameInput" required>
        <button type="submit">Get Forecast</button>
        </form>`;
        require('../Public/script')
    })
    test('attaches event to form',()=>{
        const formSubmitHandler = jest.fn();

        const weatherForm=document.getElementById('weatherForm');
        weatherForm.addEventListener('submit',formSubmitHandler)

        const event = new Event('submit',{bubbles:true});
        weatherForm.dispatchEvent(event);

        expect(formSubmitHandler).toHaveBeenCalled();
    })
})