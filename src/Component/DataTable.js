import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { Modal, Box, Typography, TextField } from '@mui/material';


export default function DataTable() {
    const [open, setOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);
    const [postData, setPostData] = useState([]);
    const [commentsData, setCommentsData] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')


    const columns = [
        { field: 'id', headerName: 'ID', editable: true },
        { field: 'title', headerName: 'Title', width: 300, editable: true },
        { field: 'body', headerName: 'Body', width: 600, editable: true },
        { field: 'comment', headerName: 'Comments', renderCell: (params) => getCommentsModal(params), width: 200 },
        { field: 'actions', headerName: 'Actions', renderCell: (params) => actions(params), width: '100%'}
    ]

    const commentsColumns = [
        { field: 'id', headerName: 'ID', width: 50, editable: true },
        { field: 'name', headerName: 'Name', width: 200, editable: true },
        { field: 'email', headerName: 'Email', width: 200, editable: true },
        { field: 'body', headerName: 'Body', width: 1500, boxSize: 'borderbox' }
    ]

    const getModalContent = () => {
        switch (currentModal) {
            case 'comments':
                return <div style={{ height: 500, width: '100%' }}><DataGrid experimentalFeatures={{ newEditingApi: true }} rows={commentsData} columns={commentsColumns} pageSize={12} /></div>
            case 'create':
                return (
                    <><Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center', marginBottom: 10 }}>
                        Por favor diligencia los campos para añadir un nuevo post
                    </Typography>
                        <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={SubmitNewPost} >
                            <TextField
                                required
                                id="outlined-required"
                                label="Title"
                                onChange={(e) => { setTitle(e.target.value) }}
                                style={{ margin: 10 }} />

                            <TextField
                                required
                                id="outlined-required"
                                label="Body"
                                onChange={(e) => { setBody(e.target.value) }}
                                style={{ margin: 10 }} />

                            <Button style={{ color: 'white', backgroundColor: 'green', height: 40, marginTop: 15 }} type='submit'>Añadir</Button>

                        </form></>)
            case 'delete':
                return (
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center', marginBottom: 10 }}>
                        Haz eliminado este Post
                    </Typography>
                )
            default:
                return <></>;

        }

    }

    const getCommentsModal = (params) =>
        <>
            <Button onClick={() => handleCommentClick(params.row.id)}>Ver Comentarios</Button>
        </>

    const actions = (params) =>
        <>
            <Button onClick={() => { deletePost(params.row.id) }} style={{ color: 'red' }} >x</Button>
        </>

    const handleOpen = (modalType) => {
        setCurrentModal(modalType)
        setOpen(true)
    };


    const handleCommentClick = (postId) => {
        getComments(postId);
        handleOpen('comments')
    }

    const handleClose = () => setOpen(false);

    const deletePost = (id) => {
        deletePostAPI(id);
        handleOpen('delete')
    }

    const submitHandleOpen = (e) => {
        handleOpen('create')
    }

    const SubmitNewPost = (e) => {
        e.preventDefault();
        handleSubmit();
        setOpen(false)
    }

    const postURL = "https://jsonplaceholder.typicode.com/posts";
    const getCommentURL = (postId) => `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    const getDeleteURL = (id) => `https://jsonplaceholder.typicode.com/posts/${id}`

    const peticionPostAPI = async () => {
        await axios.get(postURL)
            .then(response => {
                setPostData(response.data)
            })
            .catch(error => alert(error))
    }

    const getComments = async (postId) => {
        await axios.get(getCommentURL(postId))
            .then(response => {
                setCommentsData(response.data)
            })
            .catch(error => alert(error))
    }

    const deletePostAPI = async (id) => {
        await axios.delete(getDeleteURL(id))
            .then(response => peticionPostAPI())
            .catch(error => alert(error))
    }

    const handleSubmit = async (e) => {
        const newPost = { title: title, body: body, }
        await axios.post(postURL, newPost)
            .then(response => {
                setPostData([response.data, ...postData]);
                setTitle("");
                setBody("")
            })

            .catch(error => alert(error))
    }

    const tableData = postData;

    useEffect(() => {
        peticionPostAPI();
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,

    };



    return (
        <div>
            <div>
                <Button onClick={submitHandleOpen} style={{ margin: 10, fontStyle: 'bold', color: 'green' }}>Añadir un nuevo Post</Button>
            </div>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid experimentalFeatures={{ newEditingApi: true }} rows={tableData} columns={columns} pageSize={12} />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {getModalContent()}
                    </Box>
                </Modal>
            </div>
        </div>
    );
}