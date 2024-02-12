// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')
event.replaceInput(
    { input: 'thermal.iron_plate' }, // Arg 1: the filter
    'thermal.iron_plate',            // Arg 2: the item to replace
    'ad_astra:iron_plate'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )
