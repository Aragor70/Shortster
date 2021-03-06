import { mount } from 'enzyme';
import Index from '../Index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Test Index component', () => {
    const route = '/'
    const history = createMemoryHistory({ initialEntries: [route] });

    let mountComponent: any;

    beforeAll(() => {

        mountComponent = mount(
        
            <Router history={history}>
                <Index />
            </Router>)
            
    });



    it("For success, Route '/' renders interface/Index.tsx Component", () => {

        // render component once
        expect(mountComponent).toHaveLength(1);
        // render component main class 
        expect(mountComponent.find('.section-content')).toHaveLength(2);

    });

    it('For success, Render Long-URL input correctly', () => {
        expect(mountComponent.find('.input-form')).toHaveLength(1)
        
        expect(mountComponent.find('form')).toHaveLength(1)

        // render long url input
        const input = mountComponent.find('input'); 
        expect(input.props().name).toEqual('longUrl')
        expect(input.props().value).toEqual('')
        expect(input.props().required).toEqual(true)
        
    });

    it('For Fail, Does not render entire form when longUrl is empty or not valid', () => {
        
        expect(mountComponent.find('form')).toHaveLength(1)

        // render long url input
        const input = mountComponent.find('input'); 

        expect(input.text()).toContain('')

        // fill the value of input with not valid URL
        input.getDOMNode().value = 'Not_Valid_URL';
        input.simulate('change');

        // get the response with no visible element as randomize button
        expect(mountComponent.find('.randomize')).toHaveLength(0)

        input.getDOMNode().value = '';
        input.simulate('change');
        
    });


    it('For success, display entire form when longUrl is valid', () => {
        
        expect(mountComponent.find('form')).toHaveLength(1)

        // render long url input
        const input = mountComponent.find('input'); 

        expect(input.text()).toContain('')
        input.getDOMNode().value = 'https://github.com/Aragor70/Shortster';
        //input.props().value = 'https://github.com/Aragor70/Shortster';

        //expect(input.text()).toContain('https://github.com/Aragor70/Shortster')
        input.simulate('change');
        

        expect(mountComponent.find('.randomize')).toHaveLength(1)

    });

});