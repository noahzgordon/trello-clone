# == Schema Information
#
# Table name: board_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  board_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class BoardMembership < ActiveRecord::Base
  belongs_to :user
  belongs_to :board
end
