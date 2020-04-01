import React from 'react';
import './style.scss';
import { Icon } from '../ui/Icon';
import Detail from '../ui/Detail';

const PersonDetails = ({
    className,
    patient,
    provider,
    firstName,
    lastName,
    email,
    phone,
    mrn,
    account
  }) => {
  return (
    <div className={`provider ${className && className}`}>
    <span className="provider">
      <div>
        <Icon icon={provider ? "stethoscope" : patient ? "patient" : null} className="provider-icon" tertiary size={patient ? 18 : 14} />
        {provider && "Dr."} {firstName} {lastName}
      </div>
      { email &&
        <Detail
          label="Email"
          value={email}
        />
      }
      { phone &&
        <Detail
          label="Phone"
          value={phone}
        />
      }
      { mrn &&
        <Detail
          label="MRN"
          value={mrn}
        />
      }
      { account &&
        <Detail
          label="Account"
          value={account}
        />
      }
    </span>
    </div>
  );
}

export default PersonDetails;
