import React from 'react';
import { Phoneinfo } from 'types/phoneInfo';
import './TechSection.scss';

type Props = {
  phoneInfo: Phoneinfo;
};

export const TechSpecs: React.FC<Props> = ({ phoneInfo }) => {
  const { screen, resolution, processor, ram, capacity, camera, zoom, cell } =
    phoneInfo;

  return (
    <div className="TechSpecs">
      <h2 className="TechSpecs__title">Tech specs</h2>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar sect__textChar--first">Screen</p>
        <p className="sect__textValue sect__textValue--first">{screen}</p>
      </div>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar">Resolution</p>
        <p className="sect__textValue sect__textValue">{resolution}</p>
      </div>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar">Processor</p>
        <p className="sect__textValue sect__textValue">{processor}</p>
      </div>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar">RAM</p>
        <p className="sect__textValue sect__textValue">{ram}</p>
      </div>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar">Built in memory</p>
        <p className="sect__textValue sect__textValue">{capacity}</p>
      </div>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar">Camera</p>
        <p className="sect__textValue sect__textValue">{camera}</p>
      </div>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar">Zoom</p>
        <p className="sect__textValue sect__textValue">{zoom}</p>
      </div>

      <div className="TechSpects__sect sect">
        <p className="sect__textChar">Cell</p>
        <p className="sect__textValue sect__textValue">{cell}</p>
      </div>
    </div>
  );
};
