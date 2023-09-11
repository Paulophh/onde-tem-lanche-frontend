import { useState } from "react";
import Loading from 'react-loading';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { api } from "../../services/api";
import { useAuthContext } from "../../contexts/AuthContext";

import AddImage from '../../assets/add-image.png';
import {
    AddImageButton,
    ImagesContainer,
    RestaurantImage,
    RestaurantImagesContainer,
    SubmitImagesContainer
} from "./styles";
import { ImageTooBigError } from "../../errors/ImageTooBigError";


const RestaurantImages = ({ restaurantImages = [], isOwnRestaurant, handleDeleteRestaurantImage }) => {
    const [selectedImagesURL, setSelectedImagesURL] = useState([]);
    const [selectedImagesFiles, setSelectedImagesFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [areThereNewImages, setAreThereNewImages] = useState(false);

    const { token } = useAuthContext();

    function handleSelectImage(e) {
        try {
            const files = e.target.files

            if (!files || files.length === 0) return;

            const fileSize = files[0].size;
            if (fileSize > 5000000) throw new ImageTooBigError(); // Imagem deve ter até 5 MB

            const file = files[0];
            const fileURL = URL.createObjectURL(file);

            setSelectedImagesURL([...selectedImagesURL, fileURL]);
            setSelectedImagesFiles([...selectedImagesFiles, file]);
            setAreThereNewImages(true);

        } catch (error) {
            console.log(error);
        }
    }

    function handleUnselectImage(path, imageIndex) {
        const updatedImagesURL = selectedImagesURL.filter(imageURL => {
            return imageURL !== path;
        })

        const updatedImagesFiles = selectedImagesFiles.filter((_, index) => {
            return index !== imageIndex
        })

        setSelectedImagesURL(updatedImagesURL);
        setSelectedImagesFiles(updatedImagesFiles)
    }

    async function handleSubmitImages() {
        setIsLoading(true);
        const imagesFile = new FormData();

        selectedImagesFiles.forEach(file => {
            imagesFile.append('images', file);
        })

        try {
            await api.post('/restaurants/image', imagesFile, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success('Imagens salvas com sucesso');

            setAreThereNewImages(false);
            isLoading(false)(false);
        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);
        }

    }

    return (
        <RestaurantImagesContainer>
            <ImagesContainer>
                {
                    restaurantImages.length === 0 && !isOwnRestaurant &&
                    <span className='no-images-message'>
                        Esse restaurante não possui imagens =(
                    </span>
                }

                {
                    restaurantImages.map(image => (
                        <RestaurantImage key={image.path}>
                            <img
                                src={`${api.defaults.baseURL}/restaurants/image/${image.path}`}
                                alt=''
                            />

                            {isOwnRestaurant &&
                                <button onClick={() => handleDeleteRestaurantImage(image.image_id)}>
                                    <AiOutlineClose />
                                </button>
                            }
                        </RestaurantImage>
                    ))
                }

                {
                    selectedImagesURL.map((imageURL, imageIndex) => (
                        <RestaurantImage key={imageURL}>
                            <img
                                src={imageURL}
                                alt=''
                            />

                            {isOwnRestaurant &&
                                <button onClick={() => handleUnselectImage(imageURL, imageIndex)}>
                                    <AiOutlineClose />
                                </button>
                            }
                        </RestaurantImage>
                    ))
                }

                {
                    isOwnRestaurant && restaurantImages.length + selectedImagesURL.length < 4 &&
                    <AddImageButton htmlFor='image'>
                        <div className='image-container'>
                            <img src={AddImage} alt="" />
                        </div>
                        <span>
                            Adicionar imagem
                        </span>

                        <input
                            type="file"
                            id='image'
                            style={{ display: 'none' }}
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={handleSelectImage}
                        />
                    </AddImageButton>
                }
            </ImagesContainer>

            {areThereNewImages &&
                <SubmitImagesContainer>
                    <button onClick={handleSubmitImages} disabled={isLoading}>
                        {isLoading ?
                            <Loading type='spin' width={20} height={20} />
                            :
                            'Enviar Imagens'
                        }
                    </button>
                </SubmitImagesContainer>

            }
        </RestaurantImagesContainer>
    )

}

export default RestaurantImages;