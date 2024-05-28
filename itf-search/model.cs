using ON.Fragments.Content;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Google.Rpc.Context.AttributeContext.Types;

namespace Timporter.Models
{
    public class OipBaseRecordModel
    {
        public string CanonicalUrl { get; set; }
        public string[] AlternateUrls { get; set; } = new string[0];
        public string[] DID { get; set; } = new string[] { "...", "..." };
        public string? SiteId { get; set; }
        public Int64 PublishedOnUtcEpoch { get; set; }
        public string Language { get; set; } = "en";
        public string? Title { get; set; }
        public string? Location { get; set; }
        public string? Description { get; set; }
        public string? ByLine { get; set; }
        public string? ByLineTitle { get; set; }
        public string ByLineID { get; set; } = "...";
        public string[] Tags { get; set; } = new string[0];
        public bool NSFW { get; set; }
        public string[] ReplyTo { get; set; } = new string[] { "...", "..." };
        public string[] Citations { get; set; } = new string[] { "...", "..." };
    }

    public class OipPostModel : OipBaseRecordModel
    {
        public ImageModel FeaturedImage { get; set; } = new();
        public AudioModel[] AudioItems { get; set; } = new AudioModel[0];
        public ImageModel[] ImageItems { get; set; } = new ImageModel[0];
        public VideoModel[] VideoItems { get; set; } = new VideoModel[0];
        public string? BodyMD { get; set; }

        public OipPostModel(ContentRecord r, List<NewsCategory> categories)
        {
            CanonicalUrl = $"https://scnr.com/content/{r.Public.ContentID}";
            SiteId = r.Public.ContentID;
            PublishedOnUtcEpoch = r.Public.PublishOnUTC.Seconds;
            Title = r.Public.Data.Title;
            Description = r.Public.Data.Description;
            ByLine = r.Public.Data.Author;

            FeaturedImage.CanonicalUrl = $"https://scnr.com/image/{r.Public.Data.FeaturedImageAssetID}";
            FeaturedImage.SiteId = r.Public.Data.FeaturedImageAssetID;

            Tags = r.Public.Data.Tags.ToArray();
        }
    }

    public class AudioModel : OipBaseRecordModel
    {
        public string? MimeType { get; set; }
        public UInt32? FileSize { get; set; }
        public UInt32? DurationSeconds { get; set; }
        public ImageModel[] Thumbnails { get; set; } = new ImageModel[0];
        public string? Transcript { get; set; }
    }

    public class ImageModel : OipBaseRecordModel
    {
        public string? MimeType { get; set; }
        public UInt32? Height { get; set; }
        public UInt32? Width { get; set; }
        public UInt32? FileSize { get; set; }
    }

    public class VideoModel : OipBaseRecordModel
    {
        public string? MimeType { get; set; }
        public UInt32? Height { get; set; }
        public UInt32? Width { get; set; }
        public UInt32? FileSize { get; set; }
        public UInt32? DurationSeconds { get; set; }
        public ImageModel[] Thumbnails { get; set; } = new ImageModel[0];
        public string? Transcript { get; set; }
    }
}
