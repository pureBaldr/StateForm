# PureBaldr Core

TailWind UiKit wrapper core library

## Setup

### Install

`yarn add @dadmor/pure-baldr-core`
`npm install @dadmor/pure-baldr-core`

### extending tailWind config

```
theme: {
	extend: {
		colors: {
			/* 'primary' */
			primary: {
          			DEFAULT: "#...",
          			...
        		},
        		secondary: {
          			DEFAULT: "#...",
          			...
        		},
        		tertiary: {
          			DEFAULT: "#...",
          			...
			}
		}
}
```

## PureBaldr conditional classes

The mixClass method conditionally compiles a CSS class string. The directive accepts an array of classes where the array key contains the class or classes you wish to add, while the value is a boolean expression. If the array element has a numeric key, it will always be included in the rendered class list:

```
<Props>
{
  gapComponentProperties = true,
  className = ""
}
...
className={
	mixClass({
        	flex: true,
        	gap-3: gapComponentProperties,
        	[className]: true,
	})
}
```

## PureBaldr predefined MixClass conditions

PureBaldr Core offer base default class conditions, for example:

```
<Props>
{
  spacing = "md",
  className = ""
}
...
className={
	mixClass({
		flex: true,
		...gapMix(spacing),
		[className]: true,
	})
}
```

## PureBaldr MixClass list


### editable conditions 


| MixClass      | Value	             |
| ------------- | ------------------ |
| gapMix        | xs,sm,md,lg,xl     |
| paddingxMix   | xs,sm,md,lg,xl,2xl |
| paddingyMix   | xs,sm,md,lg,xl,2xl |
| paddingbMix   | xs,sm,md,lg,xl,2xl |

### coreersponding with tailwind config 

| MixClass      | Value	             |
| ------------- | ------------------ |
| textSizeMix   | xs,sm, base, md,lg,xl,2xl, 3xl |
| textWeightMix   | normal, bold, upbold |
| textColorMix   | primary, secondary, tertiary, error, success, success-light, warning, warning-light, info, white |
| borderColorMix   | .. |
| textHoverColorMix   | .. |
| bgMix   | .. |
| bgHoverColorMix   | .. |
| roundedMix |md, lg, 2xl, full |
| shadowMix | md, lg, full |
| transitionMix | true, false |

## PureBaldr custom MixClass conditions

TODO
# stateForm
