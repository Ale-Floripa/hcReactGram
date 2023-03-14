import React from 'react';
import { uploads } from '../../utils/config';

// Css
import "./Photo.css";

// Components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import PhotoItem from '../../components/PhotoItem';
import LikeContainer from '../../components/LikeContainer';

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'; 

//Redux
import { getPhoto, like, resetMessage } from "../../slices/photoSlice";



const Photo = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth);
    const {photo, loading, error, message} = useSelector((state) => state.photo);

    // comentários

    // Load photo data
    useEffect(() => {
        dispatch(getPhoto(id));

    }, [dispatch, id]);

    // Like e comentário
    const handleLike = () => {
      dispatch(like(photo._id));

      resetMessage();
    };

    if(loading) {
        return <p>Carregando...</p>;
    };

  return (
    <div id="photo" >
       <PhotoItem photo={photo} /> 
       <LikeContainer photo={photo} user={user} handleLike={handleLike} />
    </div>
  );
};

export default Photo;