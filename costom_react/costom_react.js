function customrender(react_element, container) {
    // const domelement = document.createElement(react_element.type);

    // domelement.innerHTML = react_element.props.children; // Accessing children correctly

    // domelement.setAttribute('href', react_element.props.href);
    // domelement.setAttribute('target', react_element.props.target);

    // container.appendChild(domelement);




    const domelement = document.createElement(react_element.type);

    domelement.innerHTML = react_element.props.children;

    for (const prop in react_element.props) {

      

        console.log(prop);

        if (prop === 'children') continue;

        domelement.setAttribute(prop, react_element.props[prop]);

      
    }

    container.appendChild(domelement);


   
}




const react_element = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        children: 'click me to visit google' // Adding children property
    }
};

const main_container = document.querySelector('#my_app_root');

customrender(react_element, main_container);


