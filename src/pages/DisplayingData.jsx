const user = {
  name: 'Richard Kenneth',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 50,
};

const DisplayingData = () => (
  <>
    <h1>{user.name}</h1>
    <img
      src={user.imgUrl}
      alt={`Photo of ${user.name}`}
      style={{ width: user.imageSize, height: user.imageSize }}
    />
  </>
);

export default DisplayingData;
