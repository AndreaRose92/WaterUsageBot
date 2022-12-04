class AddSourceLinkToGolfCourses < ActiveRecord::Migration[7.0]
  def change
    add_column :golf_courses, :source, :string
  end
end
