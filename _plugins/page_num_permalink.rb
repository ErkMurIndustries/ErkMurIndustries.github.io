module Jekyll
  class PageNumPermalink < Generator
    def generate(site)
      site.posts.docs.each do |post|
        categories = Array(post.data['categories']).join('/')
        page_num = post.data['page-num']
        filename = File.basename(post.path, ".*")
        filename_without_date = filename.gsub(/^\d{4}-\d{2}-\d{2}-/, '')
        
        permalink = "/#{categories}/#{page_num}/#{filename_without_date}/"
        post.data['permalink'] = permalink
      end
    end
  end
end
