Rails.application.routes.draw do
  resources :comparisons
  resources :golf_courses
  resources :cities

  get "/random", to: "golf_courses#random"
end
