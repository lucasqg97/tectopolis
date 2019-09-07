#!/bin/sh

create_container() {
  COMPONENT=$1
  COMPONENT_FOLDER="src/containers/$COMPONENT/"
  COMPONENT_PATH=$COMPONENT_FOLDER$COMPONENT

  if !(test -e $COMPONENT_FOLDER); then
    mkdir $COMPONENT_FOLDER
  fi

  COMPONENT_JS="$COMPONENT_PATH.js"
  COMPONENT_SCSS="$COMPONENT_PATH.module.scss"

  if !(test -e $COMPONENT_JS); then
    touch $COMPONENT_JS
    echo "import React, { Component } from \"react\";
import classes from \"./$COMPONENT.module.scss\";

class $COMPONENT extends Component {

  render() {
    return (
      <div className={classes.$COMPONENT}>

      </div>
    );
  };
};

export default $COMPONENT;" >> $COMPONENT_JS

    echo "$COMPONENT_JS created"
  else
    echo "$COMPONENT_JS file already exists, ignoring..."
  fi

  if !(test -e $COMPONENT_SCSS); then
    touch $COMPONENT_SCSS
    echo ".$COMPONENT {}" >> $COMPONENT_SCSS
    echo "$COMPONENT_SCSS created"
  else
    echo "$COMPONENT_SCSS file already exists, ignoring..."
  fi
}

create_container $1