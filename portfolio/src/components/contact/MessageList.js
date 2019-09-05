import React from 'react';


const MessageList = () => {
    return(
        <div className="accordion" id="message-list">
            <div className="card" >
                <div className="card-header" id="headingOne">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseMessage" aria-expanded="false" aria-controls="collapseMessage">
                            <span>Message from Fabian on 06/10/2019</span>                                            
                        </button>
                </div>
                <div id="collapseMessage" className="collapse" aria-labelledby="headingOne" data-parent="#message-list">
                    <div className="card-body">
                        Test Message
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span>Message from Fabian #2 on 06/10/2019</span>                                            
                        </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MessageList;