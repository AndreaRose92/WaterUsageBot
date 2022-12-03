class GolfCoursesController < ApplicationController
  def index
    render json: GolfCourse.all
  end

  def show
    render json: find_golf_course
  end

  def create
    course = find_golf_course
    if !course
      course = GolfCourse.create(
        name: params[:name],
        water_usage: params[:water_usage],
        city: find_city,
      )
    end
    render json: course
  end

  def update
    course = find_golf_course
    course.update(water_usage: params[:water_usage])
    render json: course
  end

  private

  def find_city
    City.find_by(name: params[:city_name], state: params[:city_state])
  end

  def find_golf_course
    GolfCourse.find_by(name: params[:name], city: find_city)
  end
end
