import {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover, // Needs manual initialization, code below
  Scrollspy,
  Tab,
  Toast,
  Tooltip // Needs manual initialization, code below
} from "bootstrap"

// Popovers initialization
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new Popover(popoverTriggerEl)
})

// Tooltips initialization
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl)
})
