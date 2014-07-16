class RemoveGravatarUrlFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :gravatar_url
  end
end
