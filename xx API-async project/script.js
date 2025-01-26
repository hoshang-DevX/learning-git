// fetch request 

const getImage = async() =>{
    const url = 'https://porn-image1.p.rapidapi.com/?type=pussy';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7fdb60e1cmsh156f43f3ecf7c0ap18f119jsn8c24bb10965e',
		'x-rapidapi-host': 'porn-image1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result)

    if(result.success && result.url)
        return result.url
    else
        throw new Error('error')

} catch (error) {
	console.error(error);
}
}

const imageBtn = document.getElementById('imageBtn')
const Image = document.getElementById('Image')

imageBtn.onclick = async () => {
    const imageURL = await getImage()
    if(imageURL)
        Image.src = imageURL
    else
        alert('error loading')   
}