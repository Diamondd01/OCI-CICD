const request = require('supertest');
const app = require('../Public/script'); 
const { testEnvironment } = require('../jest.config');

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
        const weatherForm=document.getElementById('weatherForm');
        const formSubmitHandler =jest.fn();
        weatherForm.addEventListener('submit',formSubmitHandler)

        const event = new Event('submit');
        weatherForm.dispatchEvent(event);

        expect(formSubmitHandler).toHaveBeenCalled();
    })
})