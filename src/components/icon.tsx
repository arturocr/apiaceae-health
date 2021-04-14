import React, { useEffect, useState } from 'react';

interface IIconProps {
  type: string;
}

const Icon: React.FunctionComponent<IIconProps> = ({
  type,
}): React.ReactElement => {
  const [iconComponent, setIconComponent] = useState(null);

  const addIcon = async (type: string) => {
    const icon: string = (() => {
      let iconName = null;
      switch (type) {
        case 'cardiovascular':
          iconName = 'heart';
          break;
        case 'gastrointestinal':
          iconName = 'stomach';
          break;
        case 'psychological':
          iconName = 'brain';
          break;
        default:
          iconName = 'other';
          break;
      }
      return iconName;
    })();

    import(`./condition-icons/${icon}.tsx`)
      .then(component => {
        setIconComponent(component.default);
      })
      .catch(() => {
        console.error(`"${icon}" not yet supported`);
      });
  };

  useEffect(() => {
    addIcon(type);
  }, []);

  return <>{iconComponent}</>;
};

export default Icon;
