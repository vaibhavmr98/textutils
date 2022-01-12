import React from 'react'

export const AboutUs = (props) => {

    // here in this we have create the change theme mode functionality using the React useState.
    //the code is self explainary ,where we have created the state calles "prop.mode === 'light' ? lightMode : darkMode".
        // in this we have default State value as js object having ligh mode default style.
    const lightMode = {
        color : '#000',
        background : '#fff',
        border : '0.5px solid #efefef'
    }

    const darkMode = {
        color : '#fff',
        background : '#000',
        border : '0.5px solid #efefef'
    }

    //  this state is for the changing the content of button.
    // const [toggleThemeBtnText, setToggleThemeBtnText] = useState("Enable Dark Mode...!!!")


    // const toggleThemeFnc = () =>{
    //     if( changeThemeMode.color === "#fff"){
    //         changeThemeModeFnc({
    //             color : '#000',
    //             background : '#fff',
    //             border : '0.5px solid #000'
    //         })

    //         setToggleThemeBtnText("Enable Dark Mode...!!!");
    //     }else{
    //        changeThemeModeFnc({
    //         color : '#fff',
    //         background : '#000',
    //         border : '0.5px solid #fff'
    //        })

    //        setToggleThemeBtnText("Enable Light Mode...!!!");
    //     }
    // }

    return (
        <div className="container">
            <div className="card mt-3" style={props.mode === 'light' ? lightMode : darkMode }>
                <div className="card-hrader">
                    <h4 className="card-title text-center my-3">This is About Us Component</h4>
                </div>
                <div className="card-body">
                   
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={props.mode === 'light' ? lightMode : darkMode}>
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={props.mode === 'light' ? lightMode : darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropsriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item "style={props.mode === 'light' ? lightMode : darkMode}>
                        <h2 className="accordion-header" id="headingTwo" >
                        <button className="accordion-button collapsed" style={props.mode === 'light' ? lightMode : darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropsriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={props.mode === 'light' ? lightMode : darkMode}>
                        <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed" style={props.mode === 'light' ? lightMode : darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
