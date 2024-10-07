function RoomThumbnail({ thumbnailURL, changePanorama }) {
    return (
        <div
            className="col thumbnail"
            style={{ backgroundImage: 'url(' + thumbnailURL + ')' }}
            onClick={changePanorama}
        >
        </div>
    )
}

export default RoomThumbnail;