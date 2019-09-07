#!/bin/sh

create_component() {
  # Find Component path
  COMPONENT_FATHER=$1
  COMPONENT_FOLDER="src/components/$COMPONENT_FATHER/"
  COMPONENT=$COMPONENT_FATHER
  if [ "$2" != "" ] && [ $2 != $COMPONENT ]; then
    # Create father Component if it doesn't exist
    if !(test -e $COMPONENT_FOLDER); then
      create_component $1
    fi
    COMPONENT=$2
    COMPONENT_FOLDER="$COMPONENT_FOLDER$COMPONENT/"
  fi
  COMPONENT_PATH=$COMPONENT_FOLDER$COMPONENT

  # Create Component folder if it doesn't exist
  if !(test -e $COMPONENT_FOLDER); then
    mkdir $COMPONENT_FOLDER
  fi

  COMPONENT_JS="$COMPONENT_PATH.js"
  COMPONENT_SCSS="$COMPONENT_PATH.module.scss"

  # Write Component js file
  if !(test -e $COMPONENT_JS); then
    touch $COMPONENT_JS
    VAR_COMPONENT=`echo $COMPONENT | sed 's/^[A-Z]/\L&/'`
    echo "import React from \"react\";
import classes from \"./$COMPONENT.module.scss\";

const $VAR_COMPONENT = () => {
  return (
    <div className={classes.$COMPONENT}>
    
    </div>
  );
};

export default $VAR_COMPONENT;" >> $COMPONENT_JS

    echo "$COMPONENT_JS created"
  else
    echo "$COMPONENT_JS file already exists, ignoring..."
  fi

  # Write Component scss file
  if !(test -e $COMPONENT_SCSS); then
    touch $COMPONENT_SCSS
    echo ".$COMPONENT {}" >> $COMPONENT_SCSS
    echo "$COMPONENT_SCSS created"
  else
    echo "$COMPONENT_SCSS file already exists, ignoring..."
  fi
}

create_component $1 $2