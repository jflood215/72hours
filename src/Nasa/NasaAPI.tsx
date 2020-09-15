import React from "react";

export interface NasaProps {
  url: string;
}

export interface NasaState {
  latitude: number;
  longitude: number;
  date: Date;
  nasaBlob: string;
}

class Nasa extends React.Component<NasaProps, NasaState> {
  constructor(props: NasaProps) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      date: new Date(),
      nasaBlob: "",
    };
  }

  componentDidUpdate(prevProps: NasaProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.url !== prevProps.url) {
      fetch(this.props.url)
        .then((res) => res.blob())
        .then((data: Blob) => {
          this.setState({ nasaBlob: URL.createObjectURL(data) });
          //   myImage.src = objectURL;
          console.log(data);
        });
    }
  }

  render() {
    return (
      <div>
        <img
          style={{ width: "30em", height: "30em" }}
          src={this.state.nasaBlob}
        />
      </div>
    );
  }
}

export default Nasa;
