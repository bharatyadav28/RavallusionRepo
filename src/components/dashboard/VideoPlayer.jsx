"use client";

import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import ReactPlayer from "react-player";
import {
  FaArrowLeft,
  FaBackward,
  FaCompress,
  FaExpand,
  FaForward,
  FaGear,
  FaPause,
  FaPlay,
  FaVolumeHigh,
  FaVolumeLow,
  FaVolumeXmark,
} from "react-icons/fa6";
import { GiPauseButton } from "react-icons/gi";
import { GrBackTen, GrForwardTen } from "react-icons/gr";
import { Button, Image, Spinner } from "react-bootstrap";
import "../../app/videoPlayer.css";
import "rc-slider/assets/index.css";
import screenfull from "screenfull";
import { FaAngleRight, FaCog } from "react-icons/fa";
import {
  MdOutlineLanguage,
  MdOutlineSpeed,
  MdReplay,
  MdTune,
} from "react-icons/md";
import ErrorBoundary from "@/app/utils/errorBoundaries";
// import { imgAddr, vidAddr } from "../features/api";
import { useMediaQuery } from "react-responsive";

import { toast } from "react-toastify";

const VideoPlayer = ({
  source,
  poster,
  setIsVideoFullScreen,
  tooltipView = false,
  className = "",
  setWatchTime,
  courseProgress,
  videoId,
  ref,
  autoPlay,
  latestVideo = false,

}) => {
  const [firstPlay, setFirstPlay] = useState(true);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState(360);
  const [selectedLang, setSelectedLang] = useState([source]);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [hoveredTime, setHoveredTime] = useState(null);
  const [preloaded, setPreloaded] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showRestartButton, setShowRestartButton] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const isMobileDevice = useMediaQuery({ maxWidth: 600 });
  const [intervalId, setIntervalId] = useState(null);
  const [isVideoCompleted, setIsVideoCompleted] = useState(null);
  const [lastPositon, setLastPosition] = useState(0);
  const [isClient, setIsClient] = useState(null);
  const playerRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const timeoutId = useRef(null);

  const playbackOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // src='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
  // src='https://d2n9feutzfz8ux.cloudfront.net/mu/720p.m3u8';

  // const imgSrc = `${imgAddr}/${poster}`;
  // const imgSrc = `https://media.licdn.com/dms/image/v2/D5612AQEC2GNEaVOqHQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709846879463?e=2147483647&v=beta&t=3oEOdpoAqT2j-2fuf4KzvbuNtxTkQVdaoy3wwqnMdrM`;
  const imgSrc = poster;

  // const [src, setSrc] = useState(` ${vidAddr}/${source[0]?.value}/360p.m3u8`);
  const [src, setSrc] = useState(source);

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && isClient && !window.MSStream;
  };

  const resetTimeout = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    if (!showSettings) {
      timeoutId.current = setTimeout(() => {
        if (containerRef?.current?.classList?.contains("show-controls")) {
          containerRef?.current?.classList.remove("show-controls");
          setShowControls(false);
        }
      }, 4000);
    }
  };

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => ({
    play: () => {
      setPlaying(true);
      setFirstPlay(false);
    },
    pause: () => {
      setPlaying(false);
    },
    getCurrentTime: () => {
      return playerRef.current ? playerRef.current.getCurrentTime() : 0;
    },
    getDuration: () => {
      return playerRef.current ? playerRef.current.getDuration() : 0;
    },
    reset: () => {
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
      setPlaying(false);
      setFirstPlay(true);
    }
  }));

  // Handle autoplay prop changes
  useEffect(() => {
    if (autoPlay && firstPlay) {
      setFirstPlay(false);
      setPlaying(true);
    }
  }, [autoPlay]);

  const toggleFullScreen = () => {
    const videoElement = playerRef.current.getInternalPlayer();

    if (isIOS()) {
      if (videoElement.webkitEnterFullscreen && isClient) {
        if (!isFullScreen) {
          videoElement.webkitEnterFullscreen();
          setIsFullScreen(true);
          isClient && window.screen.orientation &&
            window.screen.orientation.lock("landscape").catch(() => { });
        } else {
          videoElement.webkitExitFullscreen();
          setIsFullScreen(false);
          isClient && window.screen.orientation && window.screen.orientation.unlock();
        }
      }
    } else {
      if (screenfull.isEnabled && isClient) {
        if (!isFullScreen) {
          screenfull.request(containerRef.current);
          setIsFullScreen(true);
          isClient && window.screen.orientation &&
            window.screen.orientation.lock("landscape").catch(() => { });
        } else {
          screenfull.exit();
          setIsFullScreen(false);
          isClient && window.screen.orientation && window.screen.orientation.unlock();
        }
      }
    }
  };

  const fullScreenIcon = () => {
    return screenfull.isFullscreen ? (
      <FaCompress
        onClick={toggleFullScreen}
        className="fullscreen-button"
        size={18}
      />
    ) : (
      <FaExpand
        onClick={toggleFullScreen}
        className="fullscreen-button"
        size={18}
      />
    );
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowSettings(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, [])


  useEffect(() => {
    const foundVideo = courseProgress?.data?.courseProgress?.find(
      (v) => v.video === videoId
    );
    setIsVideoCompleted(foundVideo?.isCompleted);

    const lastPosition = foundVideo?.lastPosition;

    if (lastPosition) {
      setLastPosition(foundVideo?.lastPosition);
    }
  }, [courseProgress]);


  useEffect(() => {
    setIsVideoFullScreen && setIsVideoFullScreen(isFullScreen);
  }, [isFullScreen]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the video is in the viewport
        if (entry.isIntersecting) {
          // Play when video comes in frame
          setPlaying(true);
        } else {
          // Pause when video goes out of frame
          setPlaying(false);
        }
      },
      {
        threshold: 0.5, // 50% of the video should be visible to trigger
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);


  useEffect(() => {
    const onTouchStart = () => {
      setIsTouchDevice(true);
    };

    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      setIsTouchDevice(true);
    }

    window.addEventListener("touchstart", onTouchStart);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);


  // useEffect(() => {
  //   if (!isIOS()) {
  //     const handleFullScreenChange = () => {
  //       setIsFullScreen(screenfull.isFullscreen);
  //       if (isClient && !screenfull.isFullscreen && window.screen.orientation) {
  //         window.screen.orientation.unlock();
  //       }
  //     };

  //     if (screenfull.isEnabled) {
  //       screenfull.on("change", handleFullScreenChange);

  //       return () => {
  //         screenfull.off("change", handleFullScreenChange);
  //       };
  //     }
  //   } else {
  //     const handleFullScreenChange = () => {
  //       setIsFullScreen(document.fullscreenElement != null);
  //       if (isClient && !document.fullscreenElement && window.screen.orientation) {
  //         window.screen.orientation.unlock();
  //       }
  //     };

  //     document.addEventListener("fullscreenchange", handleFullScreenChange);

  //     return () => {
  //       document.removeEventListener(
  //         "fullscreenchange",
  //         handleFullScreenChange
  //       );
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isCurrentlyFullscreen = !isIOS()
        ? screenfull.isFullscreen
        : document.fullscreenElement != null;

      // If exiting fullscreen, restore the stored position
      if (!isCurrentlyFullscreen && latestVideo && window.lastDialogScrollPosition !== undefined) {
        setTimeout(() => {
          window.scrollTo({
            top: window.lastDialogScrollPosition,
            behavior: 'auto'
          });
        }, 100);
      }

      setIsFullScreen(isCurrentlyFullscreen);
    };

    if (!isIOS() && screenfull.isEnabled) {
      screenfull.on("change", handleFullScreenChange);
      return () => {
        screenfull.off("change", handleFullScreenChange);
      };
    } else {
      document.addEventListener("fullscreenchange", handleFullScreenChange);
      return () => {
        document.removeEventListener("fullscreenchange", handleFullScreenChange);
      };
    }
  }, []);


  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case " ":
          e.preventDefault();
          handlePlayPause();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handleBackward();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleForward();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [playing]);

  useEffect(() => {
    if (!playing) {
      setShowControls(true);
    }
  }, [playing]);

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        setIsFullScreen(screenfull.isFullscreen);
      });

      return () => {
        screenfull.off("change");
      };
    }
  }, []);


  useEffect(() => {
    resetTimeout();
  }, [showSettings]);

  useEffect(() => {
    fullScreenIcon();
  }, [screenfull.isFullscreen]);


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);





  //Functions.......................


  const handleReady = () => {
    setLoading(false);
    // setPlaying(true);
  };

  const handleBuffer = () => {
    setLoading(true);
  };

  const handleBufferEnd = () => {
    setLoading(false);
  };

  const handlePlayPause = () => {
    setFirstPlay(false);
    setPlaying((prevPlaying) => !prevPlaying);
    setShowRestartButton(false);
  };

  const handleEnded = () => {
    setPlaying(false);
    setShowRestartButton(true);
  };

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      setPlaying(true);
      setShowRestartButton(false);
    }
  };

  const handleBackward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(
        playerRef.current.getCurrentTime() - 10,
        "seconds"
      );
      setShowRestartButton(false);
    }
  };

  const handleForward = () => {
    console.log(isVideoCompleted);
    if (isVideoCompleted === false) {
      return;
    }
    if (playerRef.current) {
      playerRef.current.seekTo(
        playerRef.current.getCurrentTime() + 10,
        "seconds"
      );
    }
  };

  const handleSeekChange = (e) => {
    if (isVideoCompleted === false) {
      return;
    }

    const value = parseFloat(e.target.value);
    setPlayed(value);
    setShowRestartButton(false);
    if (playerRef.current) {
      playerRef.current.seekTo(value / 100, "fraction");
    }
  };

  const handleSeekMouseDown = (e) => {
    if (isVideoCompleted === false) {
      return;
    }
    else if (playerRef.current) {
      playerRef.current.seekTo(progressRef.current.value / 100, "fraction");
    }
  };

  const handleProgress = (state) => {
    if (!progressRef.current) return;
    const { played, playedSeconds, loaded } = state;

    const progressPercentage = played * 100;
    const loadedPercentage = loaded * 100;

    setPlayed(progressPercentage);

    setCurrentTime(playedSeconds);

    const progressBar = progressRef.current;
    if (progressBar) {
      const progressColor = `linear-gradient(to right, #CAA257 ${progressPercentage + 0.1
        }%, rgba(255,255,255,0.6) ${progressPercentage}%, rgba(255,255,255,0.6) ${loadedPercentage}%, rgba(255,255,255,0.2) ${loadedPercentage}%)`;
      progressBar.style.background = progressColor;
    }
  };

  const handleProgressHover = (e) => {
    const barWidth = progressRef.current.getBoundingClientRect().width;
    const mouseX = e.clientX - progressRef.current.getBoundingClientRect().left;
    const hoverTime = (mouseX / barWidth) * duration;
    setHoveredTime(hoverTime);

    const tooltip = document.querySelector(".tooltip-progress");
    if (tooltip) {
      const tooltipWidth = tooltip.getBoundingClientRect().width;
      const tooltipWidthPercentage = (tooltipWidth / barWidth) * 100;

      let tooltipPositionX = (mouseX / barWidth) * 100;
      // console.log(tooltipPositionX);
      // console.log(tooltipWidthPercentage);
      if (tooltipPositionX < tooltipWidthPercentage) {
        tooltipPositionX = tooltipWidthPercentage;
        // console.log(tooltipPositionX);
      } else if (tooltipPositionX + tooltipWidthPercentage > 100) {
        tooltipPositionX = 100 - tooltipWidthPercentage;
      }
      tooltip.style.left = `calc(${tooltipPositionX}% )`;
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);

    const volumeTrack = document.querySelector(".volume-track");
    if (volumeTrack) {
      const coloredWidth = value * 100 + "%";
      volumeTrack.style.background = `linear-gradient(to right, #CAA257 ${coloredWidth}, rgba(255,255,255,0.8) ${coloredWidth})`;
    }
  };

  const handleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  const volumeIcon = () => {
    if (volume === 0) {
      return (
        <FaVolumeXmark
          onClick={handleMute}
          className="volume-button"
          size={18}
        />
      );
    } else if (volume < 0.5) {
      return (
        <FaVolumeLow onClick={handleMute} className="volume-button" size={18} />
      );
    } else {
      return (
        <FaVolumeHigh
          onClick={handleMute}
          className="volume-button"
          size={18}
        />
      );
    }
  };



  const toggleSettings = () => {
    setActiveMenu("main");
    setShowSettings(!showSettings);
  };



  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    toggleSettings();
  };

  const handleError = (error) => {
    console.error("An error occurred while loading the video:", error);
    toast.error("An error occurred while loading the video");
  };

  const handleQualityChange = (quality) => {
    // if (quality === 360) {
    //   setSelectedQuality("Auto");
    // } else {
    //   setSelectedQuality(quality);
    // }
    setSelectedQuality(quality);

    // const newSrc = `${vidAddr}/${selectedLang?.value}/${quality}p.m3u8`;
    const newSrc = `${source}`;
    if (newSrc !== src) {
      const currentTime = playerRef.current.getCurrentTime();
      setPlaying(true);
      setSrc(newSrc);

      setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.seekTo(currentTime);
        }
      }, 500);
    }
    toggleSettings();
  };

  const settingsMenu = () => {
    return (
      <div className={`settings-wrapper  ${showSettings ? "show" : ""}`}>
        <div className="settings-menu">
          <div className="menu-header mb-2">
            {activeMenu !== "main" && (
              <FaArrowLeft
                className="back-icon"
                onClick={() => handleMenuChange("main")}
              />
            )}
            <span className="menu-title ">
              {activeMenu === "main"
                ? "Settings"
                : activeMenu === "quality"
                  ? "Quality"
                  : activeMenu === "playbackspeed" &&
                  "Playback Rate"}
            </span>
          </div>

          <ul className="menu-items">
            {activeMenu === "main" && (
              <>
                <li
                  onClick={() => handleMenuChange("quality")}
                  className="my-2 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <MdTune className="me-1" />
                    <p>Quality:</p>
                  </div>

                  <span className="flex items-center cursor-pointer z-50">
                    {selectedQuality}p <FaAngleRight />
                  </span>
                </li>

                <li
                  onClick={() => handleMenuChange("playbackspeed")}
                  className="flex items-center justify-between"
                >
                  <span className="flex items-center">
                    <MdOutlineSpeed className=" me-1" />
                    Playback Rate:
                  </span>

                  <span className="flex items-center">
                    {playbackSpeed}x <FaAngleRight />
                  </span>
                </li>
              </>
            )}
            {activeMenu === "quality" && (
              <>
                <li
                  onClick={() => handleQualityChange(1080)}
                  className={selectedQuality === 1080 ? "active" : ""}
                >
                  1080p
                </li>
                <li
                  onClick={() => handleQualityChange(720)}
                  className={selectedQuality === "720" ? "active" : ""}
                >
                  720p
                </li>
                <li
                  onClick={() => handleQualityChange(360)}
                  className={selectedQuality === 360 ? "active" : ""}
                >
                  360p
                </li>
              </>
            )}
            {activeMenu === "playbackspeed" &&
              playbackOptions?.map((speed, index) => (
                <li
                  key={speed}
                  className={playbackSpeed === speed ? "active" : ""}
                  onClick={() => handleSpeedChange(speed)}
                >
                  {speed}x
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  };

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`video-container  ${playing ? "playing" : "paused"
        } !z-0 !${className}`}
      ref={containerRef}
      onMouseMove={() => {
        containerRef.current.classList.add("show-controls");
        setShowControls(true);
        resetTimeout();
      }}
      onTouchStart={() => {
        containerRef.current.classList.add("show-controls");
        setShowControls(true);

        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }
      }}
      onTouchEnd={() => {
        resetTimeout();
      }}
    >

      {loading ? (
        <div className="loading-indicator text-white">
          <Spinner size="xl" />
        </div>
      ) : null}

      <div
        className="video-player"

      >
        <ReactPlayer
          className="react-player"
          ref={playerRef}
          url={src}
          playing={playing}
          controls={false}
          width="100%"
          height="100%"
          playbackRate={playbackSpeed}
          volume={volume}
          // light={false}
          // playIcon={<FaPlay/>}
          light={
            <div
              className={"flex justify-center thumbnail-container"}
              style={{
                height: "100%",
                width: "100%",
                zIndex: 99,
                background: "rgba(0,0,0)",
              }}
            >
              <div className="thumbnail-wrapper">
                <Image
                  src={imgSrc}
                  alt="Thumbnail"
                  className="thumbnail-image"
                  onClick={() => {

                    setLoading(true);
                    setPreloaded(true);
                  }}
                />
              </div>
            </div>
          }
          // onReady={()=>setPlaying(true)}
          playsinline={true}
          onClickPreview={() => {
            if (!playing) {
              setLoading(true);
              handlePlayPause();
            }
          }}
          // onStart={() => setPlaying(true)}
          onStart={() => {
            setPlaying(true);
            if (playerRef.current) {
              playerRef.current.seekTo(lastPositon, "seconds");
            }
          }}
          onProgress={handleProgress}
          onDuration={handleDuration}
          onEnded={handleEnded}
          onBuffer={handleBuffer}
          onError={handleError}
          onBufferEnd={handleBufferEnd}
          onPlay={() => {
            setPlaying(true);
            const id = setInterval(() => {
              if (playerRef.current && setWatchTime) {
                const currentTime = playerRef.current.getCurrentTime();
                setWatchTime(currentTime);
              }
            }, 2000); //Todo:  need to change in 1 minutes
            setIntervalId(id);
          }}
          onPause={() => {
            setPlaying(false);
            if (intervalId) {
              clearInterval(intervalId);
              setIntervalId(null);
            }
          }}
          config={{
            hls: {
              forceHLS: true,
            },
            // dash: {
            //   forceDASH: true
            // },
          }}
        />
      </div>
      {!firstPlay && (
        <div
          className={`player-controls ${isFullScreen ? "fullscreen-controls" : ""
            } `}
        >
          <div className="on-screen-controls">
            <GrBackTen className="control-icons cursor-pointer" onClick={handleBackward} />

            {showRestartButton ? (
              <MdReplay
                onClick={handleRestart}
                className="control-icons play-pause-restart cursor-pointer"
              />
            ) : playing ? (
              <GiPauseButton
                onClick={handlePlayPause}
                className="control-icons play-pause-restart cursor-pointer"
              />
            ) : (
              <FaPlay
                className="control-icons play-pause-restart cursor-pointer"
                onClick={handlePlayPause}
              />
            )}
            <GrForwardTen className={`control-icons ${isVideoCompleted === false ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={handleForward} />
          </div>

          <div className="bottom-controls">
            <span className="text-white ms-2 duration-counter">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            <div
              className={`progress-bar-wrapper me-2`}
              onMouseMove={handleProgressHover}
              onMouseLeave={() => setHoveredTime(null)}
            >
              {tooltipView && !isTouchDevice && (
                <div
                  className="tooltip-progress"
                >
                  <p>{formatTime(hoveredTime)}</p>
                </div>
              )}

              <input
                type="range"
                className={`track-range ${isVideoCompleted === false ? "cursor-not-allowed" : "cursor-pointer"}`}
                ref={progressRef}
                min={0}
                max={100}
                value={played}
                step="any"
                onChange={handleSeekChange}
                onMouseDown={handleSeekMouseDown}
              />
            </div>

            <div className="volume-wrapper flex items-center ">
              {volumeIcon()}
              {isTouchDevice ? null : (
                <input
                  type="range"
                  className="volume-track"
                  style={{
                    background: `linear-gradient(to right, #CAA257 ${volume * 100
                      }%, rgba(255,255,255,0.8) ${volume * 100}%)`,
                  }}
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                />
              )}
            </div>

            <div className="quality mx-3" ref={menuRef}>
              {settingsMenu()}

              <FaCog
                size={18}
                onClick={toggleSettings}
                className={`settings-button ${showSettings ? "active" : ""}`}
              />
            </div>

            <span className="me-2">{fullScreenIcon()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;