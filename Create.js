import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const fetchForm = (e) => {
        e.preventDefault();
        const newBlog = { title, body, author }

        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(newBlog)
            }).then(() => {
                console.log('New post added');
                setIsPending(false);
                history.push('/')
            })
        }, 2000)
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={fetchForm}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                { !isPending && <button>Add post</button> }
                { isPending && <button disabled>Adding new Post</button> }
            </form>
        </div>
    );
}
 
export default Create;