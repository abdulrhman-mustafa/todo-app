import React from 'react';

const Form = ({description, setDescription, onAddItem}) => {

    function handleSubmit(e) {
        e.preventDefault();

        // Way one
        if(!description) {
            return alert("You must add a value")
        }

        // Way two
        // if(description === "") {
        //     return alert("You must add a value")
        // }

        const newItem = {
            id: Date.now(),
            description,
            selected: false,
        };
        
        onAddItem(newItem);
        
        setDescription("");
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <input 
                        type="text" 
                        placeholder='Enter a task' 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <button className='btn-add'>Add</button>
                </div>
            </form>
        </>
    );
}

export default Form;
