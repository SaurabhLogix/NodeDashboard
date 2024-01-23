'use client'

const FullScreenDropdown = () => {

    /*
    full screen
    */
    const toggleFullscreen = () => {
        let document: any = window.document;
        document.body.classList.add("fullscreen-enable");

        if (
            !document.fullscreenElement &&
          /* alternative standard method */ !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
        ) {
            // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }

        // handle fullscreen exit
        const exitHandler = () => {
            if (
                !document.webkitIsFullScreen &&
                !document.mozFullScreen &&
                !document.msFullscreenElement
            )
                document.body.classList.remove("fullscreen-enable");
        };
        document.addEventListener("fullscreenchange", exitHandler);
        document.addEventListener("webkitfullscreenchange", exitHandler);
        document.addEventListener("mozfullscreenchange", exitHandler);
    };
    return (
        <>
            <div className="ms-1 header-item d-none d-sm-flex">
                <button
                    onClick={toggleFullscreen}
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle"
                >
                    <i className="bi bi-arrows-fullscreen fs-16"></i>
                </button>
            </div>
        </>
    );
}
export default FullScreenDropdown;