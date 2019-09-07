#!/bin/sh

create_component() {
  # Find Component path
  COMPONENT=$1
  COMPONENT_PATH="src/components/helpers/$COMPONENT"

  COMPONENT_JS="$COMPONENT_PATH.js"

  # Write Component js file
  if !(test -e $COMPONENT_JS); then
    touch $COMPONENT_JS
    VAR_COMPONENT=`echo $COMPONENT | sed 's/^[A-Z]/\L&/'`
    echo "import React from \"react\";

const $COMPONENT = props => {
  return (
    <div 
      $VAR_COMPONENT=\"\"
      className={props.className}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default $COMPONENT;" >> $COMPONENT_JS

    echo "$COMPONENT_JS created"
  else
    echo "$COMPONENT_JS file already exists, ignoring..."
  fi
}

create_component $1 $2